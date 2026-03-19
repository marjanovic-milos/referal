import React from "react";

import { useAuthContext } from "../pageGuard/withAuth";
export const Admin = () => {
  const { logout } = useAuthContext();

  return (
    <div>
      Welcome,
      <button onClick={logout}>Logout</button>
    </div>
  );
};
