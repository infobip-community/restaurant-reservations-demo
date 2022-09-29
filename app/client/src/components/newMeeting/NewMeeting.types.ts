import { AlertI } from "../../app/App.types";

export interface NewMeetingPropsI {
  setAlertMessage: (alert: AlertI) => void;
  isLoading: boolean;
}
