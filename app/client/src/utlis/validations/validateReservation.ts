import { ErrorI, ReservationI } from "../../app/App.types";

const emailValidation =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateReservation = (reservation: ReservationI): ErrorI => {
  const errors: ErrorI = {};
  if (!reservation.host_name?.trim()) {
    errors.host_name = "Please enter a host name";
  }
  if (!reservation.host_email?.trim()) {
    errors.host_email = "Please enter an email";
  } else {
    if (!emailValidation.test(reservation.host_email)) {
      errors.host_email = "Please enter a valid email";
    }
  }
  return errors;
};
