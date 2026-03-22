"use client";
import React from "react";

import { useAuthContext } from "../pageGuard/withAuth";
import QRCodeLayout from "../qrCode/QRCode";
export const User = () => {
  const { logout, user } = useAuthContext();

  return (
    <div>
      User
      <button onClick={logout}>Logout</button>
      <QRCodeLayout user={user} />
    </div>
  );
};
