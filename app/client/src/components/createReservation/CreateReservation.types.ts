import { AlertI } from "../../app/App.types";

export interface NewReservationPropsI {
  setAlertMessage: (alert: AlertI) => void;
  isLoading: boolean;
}
