"use client";
import { AuthGuard, useAuthContext } from "../components/pageGuard/withAuth";

const DashboardPage = () => {
  const { logout } = useAuthContext();
  return (
    <AuthGuard>
      <div>
        Welcome,
        <button onClick={logout}>Logout</button>
      </div>
    </AuthGuard>
  );
};

export default DashboardPage;
