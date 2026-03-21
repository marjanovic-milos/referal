"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  AbsoluteCenter,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import GoogleLogin from "../auth/google";

const RegisterForm = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  //   const { mutate: register, isPending, error } = useRegister();
  //   const { mutate: googleLogin, isPending: googlePending } = useGoogleLogin();

  const passwordMismatch = confirm.length > 0 && password !== confirm;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) return;
    // register({ phone, password });
  };

  return (
    <Stack as="form" onSubmit={handleSubmit} spacing={4} pt={2}>
      <GoogleLogin />

      <Box position="relative" py={2}>
        <Divider />
        <AbsoluteCenter bg="white" px={3} fontSize="sm" color="gray.500">
          or
        </AbsoluteCenter>
      </Box>

      <FormControl isRequired>
        <FormLabel fontSize="sm">Phone number</FormLabel>
        <Input
          type="tel"
          placeholder="+381 60 123 4567"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel fontSize="sm">Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Choose a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement>
            <IconButton
              variant="ghost"
              size="sm"
              aria-label={showPassword ? "Hide password" : "Show password"}
              icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
              onClick={() => setShowPassword((v) => !v)}
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl isRequired isInvalid={passwordMismatch}>
        <FormLabel fontSize="sm">Repeat password</FormLabel>
        <InputGroup>
          <Input
            type={showConfirm ? "text" : "password"}
            placeholder="Repeat your password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <InputRightElement>
            <IconButton
              variant="ghost"
              size="sm"
              aria-label={showConfirm ? "Hide password" : "Show password"}
              icon={showConfirm ? <ViewOffIcon /> : <ViewIcon />}
              onClick={() => setShowConfirm((v) => !v)}
            />
          </InputRightElement>
        </InputGroup>
        {passwordMismatch && (
          <Text fontSize="xs" color="red.500" mt={1}>
            Passwords do not match.
          </Text>
        )}
      </FormControl>

      {/* {error && (
        <Text fontSize="sm" color="red.500">
          {error.code === "auth/email-already-in-use"
            ? "An account with this number already exists."
            : error.message}
        </Text>
      )} */}

      <Button
        type="submit"
        colorScheme="blue"
        width="full"
        // isLoading={isPending}
        isDisabled={passwordMismatch}
      >
        Create account
      </Button>
    </Stack>
  );
};

export default RegisterForm;
