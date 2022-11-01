import React from "react";
import { AlertI } from "../app/App.types";

export const defaultAlertContextValue: AlertI = {
  isLoading: false,
  isVisible: false,
  type: "success",
  message: "Reservation successfully updated",
};

export const AlertContext = React.createContext<any>({
  ...defaultAlertContextValue,
});
