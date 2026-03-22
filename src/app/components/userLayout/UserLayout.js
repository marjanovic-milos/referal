"use client";
import React from "react";
import { Container } from "@chakra-ui/react";
import { useAuthContext } from "../pageGuard/withAuth";
import QRCodeLayout from "../qrCode/QRCode";
import UserMenu from "../userMenu/UserMenu";
export const UserLayout = ({ children }) => {
  const { logout, user } = useAuthContext();

  return (
    <Container maxW="100%" style={{ height: "100vh", width: "100%" }}>
      {children}
      <UserMenu />
    </Container>
  );
};
