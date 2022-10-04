import { AlertColor } from "@mui/material";

export interface AlertI {
  isLoading?: boolean;
  message?: string;
  type?: AlertColor;
  isVisible?: boolean;
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
  isSubmitted?: boolean;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}
