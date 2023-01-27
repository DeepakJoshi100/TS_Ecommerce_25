import React from "react";
import { Navigate } from "react-router-dom";
import { UserNot } from "./model";
import { withUser } from "./withProvider";
const UserNotLoggedIn = ({ user, children }: UserNot) => {
  console.log(user);
  if (!user) {
    return <Navigate to="/LoginPage" />;
  }
  return children;
};

export default withUser(UserNotLoggedIn);
