import { AlertI } from "../../app/App.types";

export interface ReservationPropsI {
  onUpdate: () => void;
  setAlertMessage: (alert: AlertI) => void;
}
