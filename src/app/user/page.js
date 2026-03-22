import React from "react";

import { UserLayout } from "../components/userLayout/UserLayout";
import PageGuard from "../components/pageGuard/authGuard";
const UserPage = () => {
  return (
    <PageGuard>
      <UserLayout>Home User</UserLayout>
    </PageGuard>
  );
};

export default UserPage;
