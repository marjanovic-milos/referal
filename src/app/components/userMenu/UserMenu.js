import React from "react";
import { Box, Icon } from "@chakra-ui/react";
import Link from "next/link";
import classes from "./UserMenu.module.css";
import { FiHome, FiUser } from "react-icons/fi";
import { FaQrcode } from "react-icons/fa";

const UserMenu = () => {
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Link className={classes.item} href="/user">
          <Icon as={FiHome} boxSize={6} />
        </Link>
        <Box className={classes.item}>
          <Icon as={FaQrcode} boxSize={6} />
        </Box>
        <Link className={classes.item} href="/user/profile">
          <Icon as={FiUser} boxSize={6} />
        </Link>
      </Box>
    </Box>
  );
};

export default UserMenu;
