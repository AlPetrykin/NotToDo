import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { auth0 } from "@/lib/auth0";

export async function GET() {
  const session = await auth0.getSession();
  const userId = session?.user?.sub;

  const client = await clientPromise;
  const db = client.db("NotToDos");

  const tasks = await db
    .collection("NotToDos")
    .find({ userId })
    .sort({ createdAt: -1 })
    .toArray();

  const normalized = tasks.map((item) => ({
    ...item,
    id: item._id.toString(),
  }));

  return NextResponse.json(normalized);
}

export async function POST(req: Request) {
  try {
    console.log("start post");
    const session = await auth0.getSession();
    const userId = session?.user?.sub;

    const data = await req.json();
    const client = await clientPromise;
    const db = client.db("NotToDos");

    const result = await db.collection("NotToDos").insertOne({
      ...data,
      userId,
      createdAt: new Date(),
    });

    return NextResponse.json(result, { status: 201 });
  } catch (err) {
    console.error("POST error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
