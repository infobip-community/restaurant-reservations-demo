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
  host_email?: string | undefined;
  host_name?: string | undefined;
  hour?: string | undefined;
  date?: string | undefined;
  party_size?: string | undefined;
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
