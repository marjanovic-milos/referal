import React from "react";
import { Box, Avatar, Text, Divider, Button } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { useAuthContext } from "../pageGuard/withAuth";
import QRCodeLayout from "../qrCode/QRCode";
const ProfileCard = () => {
  const { logout, user } = useAuthContext();
  console.log(user, 111);
  return (
    <div>
      <Box
        bg="white"
        borderRadius="xl"
        border="1px solid"
        borderColor="gray.100"
        p={5}
        w="300px"
      >
        <Box display="flex" alignItems="center" gap={3} mb={4}>
          <Avatar name={user?.displayName} src={user?.photoURL} size="md" />
          <Box>
            <Text fontWeight="600" fontSize="15px" lineHeight="1.2">
              {user?.displayName}
            </Text>
            <Text fontSize="13px" color="gray.500" mt={0.5}>
              {user?.email}
            </Text>
          </Box>
        </Box>

        <Divider mb={4} />

        <Button
          w="full"
          variant="ghost"
          colorScheme="red"
          leftIcon={<FiLogOut />}
          justifyContent="flex-start"
          fontSize="14px"
          onClick={logout}
        >
          Log out
        </Button>
      </Box>
      <QRCodeLayout user={user} />
    </div>
  );
};

export default ProfileCard;
