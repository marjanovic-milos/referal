import React from "react";
import { AuthGuard } from "./withAuth";

const PageGuard = ({ children }) => {
  return <AuthGuard>{children}</AuthGuard>;
};

export default PageGuard;
