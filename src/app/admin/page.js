"use client";
import { AuthGuard } from "../components/pageGuard/withAuth";
import { Admin } from "../components/admin/Admin";
export default function DashboardPage() {
  return (
    <AuthGuard>
      <Admin />
    </AuthGuard>
  );
}
