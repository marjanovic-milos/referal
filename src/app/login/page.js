import React from "react";
// import GoogleLogin from "../components/auth/google";
import { LoginForm } from "../components/login/Login";
import { AuthGuard } from "../components/pageGuard/withAuth";

const LoginPage = () => {
  return (
    <AuthGuard>
      <LoginForm />
    </AuthGuard>
  );
};

export default LoginPage;
