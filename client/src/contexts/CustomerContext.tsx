import React from "react";
import { CustomerContextI } from "../pages/home/Home.types";

export const defaultCustomerContext: CustomerContextI = {
  email: "",
  name: "",
  phoneNumber: "",
};

export const CustomerContext = React.createContext<any>({
  ...defaultCustomerContext,
});
