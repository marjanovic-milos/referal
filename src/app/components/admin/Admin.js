import React from "react";

import { useAuthContext } from "../pageGuard/withAuth";
import CodeScanner from "../scanner/CodeScanner";
export const Admin = () => {
  const { logout } = useAuthContext();

  return (
    <div>
      Admin
      <button onClick={logout}>Logout</button>
      <CodeScanner />
    </div>
  );
};
