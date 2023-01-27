import React, { FC, useState } from "react";
import { AlertContext } from "../Context";
type AlertProviderProp = { children: React.ReactNode };

const AlertProvider: FC<AlertProviderProp> = ({ children }) => {
  const [alert, setAlert] = useState();
  const removeAlert = () => {
    setAlert(undefined);
  };
  return (
    <>
      <AlertContext.Provider value={{ alert, setAlert, removeAlert }}>
        {children}
      </AlertContext.Provider>
    </>
  );
};

export default AlertProvider;
