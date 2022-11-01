import React from "react";
import { OauthContextI } from "../app/App.types";

export const defaultOauthContextValue: OauthContextI = {
  access_token: "",
  token_type: "",
  authToken: "",
};
export const OauthContext = React.createContext<OauthContextI>(
  defaultOauthContextValue
);
