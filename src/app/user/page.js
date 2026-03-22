import React from "react";
import { AuthGuard } from "../components/pageGuard/withAuth";
import { User } from "../components/user/User";

const UserPage = () => {
  return (
    <AuthGuard>
      <User />
    </AuthGuard>
  );
};

export default UserPage;
