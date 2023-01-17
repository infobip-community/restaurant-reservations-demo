import React from "react";
import { AuthI } from "../pages/home/Home.types";

export const defaultAuthContext: AuthI = {
  token: 'klasjd',
  locale: 'en-Us',
  username: 'zfarmer'
};

export const AuthContext = React.createContext<any>({
  ...defaultAuthContext,
});
