import React from "react";
import { AuthI } from "../pages/home/Home.types";

export const defaultAuthContext: AuthI = {
  token: '',
  locale: '',
  username: '',
  customerName: '',
  customerEmail: '',
  onLogout: () => {}
};

export const AuthContext = React.createContext<any>({
  ...defaultAuthContext,
});
