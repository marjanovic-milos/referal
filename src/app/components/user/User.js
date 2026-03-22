"use client";
import React from "react";

import { useAuthContext } from "../pageGuard/withAuth";
export const User = () => {
  const { logout } = useAuthContext();

  return (
    <div>
      User
      <button onClick={logout}>Logout</button>
    </div>
  );
};
