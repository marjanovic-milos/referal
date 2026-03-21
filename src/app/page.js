"use client";
import Image from "next/image";
import UsersList from "./components/userList";
import CreateUser from "./components/createUser";
import GoogleLogin from "./components/auth/google";
import { useSnackbar } from "notistack";
// import { LoginForm } from "./components/login/Login";
import LoginForm from "./components/login/Login";
import RegisterForm from "./components/register/Register";
import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  AbsoluteCenter,
  IconButton,
} from "@chakra-ui/react";
import { AuthGuard } from "./components/pageGuard/withAuth";
export default function Home() {
  // const { enqueueSnackbar } = useSnackbar();

  return (
    <AuthGuard>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Flex minH="100vh" align="center" justify="center" bg="gray.50">
          <Box
            bg="white"
            rounded="xl"
            shadow="md"
            px={{ base: 6, md: 10 }}
            py={8}
            w="full"
            maxW="420px"
          >
            <Heading size="md" mb={6} textAlign="center" fontWeight="600">
              Welcome
            </Heading>

            <Tabs variant="soft-rounded" colorScheme="blue" isFitted>
              <TabList mb={6}>
                <Tab fontSize="sm">Sign in</Tab>
                <Tab fontSize="sm">Register</Tab>
              </TabList>

              <TabPanels>
                <TabPanel px={0} pb={0}>
                  <LoginForm />
                </TabPanel>
                <TabPanel px={0} pb={0}>
                  <RegisterForm />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </div>
    </AuthGuard>
  );
}
