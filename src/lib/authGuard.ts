import { auth0 } from "./auth0";
import { redirect } from "next/navigation";

export async function requireAuth(options?: { redirectTo?: string }) {
  const session = await auth0.getSession();

  if (!session?.user) {
    redirect(options?.redirectTo ?? "/");
  }

  return session;
}

export async function requireGuest(options?: { redirectTo?: string }) {
  const session = await auth0.getSession();

  if (session?.user) {
    redirect(options?.redirectTo ?? "/nottodos");
  }

  return session;
}