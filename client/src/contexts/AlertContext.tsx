import React from "react";
import { AlertI } from "../pages/home/Home.types";

export const defaultAlertContextValue: AlertI = {
  isLoading: false,
  isVisible: false,
  type: "success",
  message: "Reservation successfully updated",
};

export const AlertContext = React.createContext<any>({
  ...defaultAlertContextValue,
});
