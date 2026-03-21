"use client";
import React, { useState } from "react";

import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  AbsoluteCenter,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import GoogleLogin from "../auth/google";
import { useAuth } from "@/app/hooks/users/useAuth";
const LoginForm = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ phone, password });
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
            placeholder="Enter your password"
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

      {/* {error && (
        <Text fontSize="sm" color="red.500">
          {error.code === "auth/invalid-credential"
            ? "Incorrect phone number or password."
            : error.message}
        </Text>
      )} */}

      <Button
        type="submit"
        colorScheme="blue"
        width="full"
        // isLoading={isPending}
      >
        Sign in
      </Button>
    </Stack>
  );
};
export default LoginForm;
