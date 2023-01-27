import React from "react";
import { Navigate } from "react-router-dom";
import { UserNot } from "./model";
import { withUser } from "./withProvider";

function UserLoggedIn({ user, children }: UserNot) {
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
}

export default withUser(UserLoggedIn);
