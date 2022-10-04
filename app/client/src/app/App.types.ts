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

export enum TimeFrameI {
  TODAY = "TODAY",
  TOMORROW = "TOMORROW",
  ALL = "ALL",
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
  title: boolean;
  room: boolean;
  description: boolean;
  host: boolean;
  guest: boolean;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}
