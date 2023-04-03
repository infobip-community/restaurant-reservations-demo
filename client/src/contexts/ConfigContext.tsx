import React from "react";
import { ConfigContextI } from "../pages/home/Home.types";

export const defaultConfigContext: ConfigContextI = {
    fields: [],
    setFields: () => {}
};

export const ConfigContext = React.createContext<ConfigContextI>(defaultConfigContext);
