import { AlertColor } from "@mui/material";
import { Field } from "../../components/createReservation/CreateReservationTypes";
import { FieldI } from "../config/ConfigTypes";

export interface UserUpdateParamsI {
  token?: string;
  username?: string;
  locale?: string;
}

export interface CustomerContextI {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface ConfigContextI {
  fields: FieldI[];
  setFields?: (configContextI: ConfigContextI) => void;
}
export interface UserContextI {
  token: string;
  username: string;
  locale: string;
  customerName?: string;
  customerEmail?: string;
  customerPhoneNumber?: string;
  onLogout: () => void;
  update: (userContext: UserContextI) => void;
}

export interface AlertI {
  isLoading?: boolean;
  message?: string;
  type?: string;
  isVisible?: boolean;
}

export interface AlertContextI {
  isLoading?: boolean;
  message?: string;
  type?: AlertColor;
  isVisible?: boolean;
  updateAlertContext: (alert: AlertI) => void;
}

export interface APIResponseI {
  message?: string;
}

export interface ReservationI {
  id?: string;
  host_email?: string;
  host_name?: string;
  host_phone_number?: string;
  hour?: string;
  date?: string;
  party_size?: string;
  additionalFields?: Field[];
}

export interface ErrorI {
  host_email?: string;
  host_name?: string;
  host_phone_number?: string;
  hour?: string;
  date?: string;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

export interface OauthContextI {
  access_token: string;
  token_type: string;
  authToken: string;
}
