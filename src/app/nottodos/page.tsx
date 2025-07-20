import Dashborad from "./components/Dashboard"
import { requireAuth } from "@/lib/authGuard";

export default async function Home() {
  requireAuth();

  return (
    <Dashborad />
  );
}


