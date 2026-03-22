import React from "react";
import { Button } from "@chakra-ui/react";
import { useAuthContext } from "../pageGuard/withAuth";
import QRCodeLayout from "../qrCode/QRCode";
const ProfileCard = () => {
  const { logout, user } = useAuthContext();

  return (
    <div>
      Profil
      <Button onClick={logout}>Logout</Button>
      <QRCodeLayout user={user} />
    </div>
  );
};

export default ProfileCard;
