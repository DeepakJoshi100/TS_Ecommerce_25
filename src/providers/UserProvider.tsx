import React, { FC, useEffect, useState } from "react";
import { UserContext } from "../Context";
import axios from "axios";
import Loading from "../Loading";

type UserProviderProp = { children: React.ReactNode };

const UserProvider: FC<UserProviderProp> = ({ children }) => {
  const [user, setUser] = useState();
  const [userLoading, setUserLoading] = useState(true);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: { Authorization: token },
        })
        .then((response) => {
          setUser(response.data);
          setUserLoading(false);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setUserLoading(false);
        });
    } else {
      setUserLoading(false);
    }
  }, []);
  function handleLogOut() {
    localStorage.removeItem("token");
    setUser(undefined);
  }
  if (userLoading) {
    return <Loading />;
  }
  return (
    <UserContext.Provider
      value={{ user, setUser, handleLogOut, isLoggedIn: !!token }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
