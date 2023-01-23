import React from "react";
import {  UserContextI } from "../pages/home/Home.types";

export const defaultUserContext: UserContextI = {
  token: '',
  locale: '',
  username: '',
  onLogout: () => {},
  update: () => {}
};

export const UserContext = React.createContext<any>({
  ...defaultUserContext,
});
