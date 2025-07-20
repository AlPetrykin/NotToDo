import { requireGuest } from "@/lib/authGuard";
import HomePage from "./home/HomePage";

export default async function Home() {
  await requireGuest(); 

  return <HomePage />;
}