import { AlertColor } from "@mui/material";

export interface AlertI {
  isLoading?: boolean;
  message?: string;
  type?: AlertColor;
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
  hour?: string;
  date?: string;
  party_size?: string;
}

export interface ErrorI {
  host_email?: string;
  host_name?: string;
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
