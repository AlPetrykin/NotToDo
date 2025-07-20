import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { auth0 } from "@/lib/auth0";
import { ObjectId } from "mongodb";


export async function PATCH(
  req: Request
) {
  try {
    const session = await auth0.getSession();
    const userId = session?.user?.sub;
    
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();
    const updates = await req.json();

    const client = await clientPromise;
    const db = client.db("NotToDos");

    const result = await db
      .collection("NotToDos")
      .updateOne(
        { _id: new ObjectId(id), userId },
        { $set: { ...updates, updatedAt: new Date() } }
      );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("PATCH error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await auth0.getSession();
    const userId = session?.user?.sub;

    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    console.log(id);

    if (!id) {
      return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("NotToDos");

    const result = await db.collection("NotToDos").deleteOne({
      _id: new ObjectId(id),
      userId,
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "Task not found " + id },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
