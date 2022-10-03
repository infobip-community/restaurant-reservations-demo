import * as React from "react";
import Restaurant from "@mui/icons-material/Restaurant";
import { ReservationPropsI } from "./Reservations.types";
import { ReservationI } from "../../app/App.types";

import { useEffect, useState } from "react";
import { APIPath } from "../../const";

import styled from "@emotion/styled";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import {
  CalendarMonth,
  Dining,
  Diversity3,
  Groups2,
  LocalDining,
  QueryBuilder,
} from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker, TimePicker } from "@mui/x-date-pickers";
import { validateField } from "../shared/Validations/Validations";

const FieldContainer = styled.div`
  & > div {
    width: 100%;
  }
`;

const Reservations = ({ setAlertMessage }: ReservationPropsI) => {
  const [reservationsList, setReservationsList] = useState<ReservationI[]>([]);
  const [reservationSelected, setReservationSelected] = useState<
    ReservationI | undefined
  >();
  const [temporalReservation, setTemporalReservation] = useState<
    ReservationI | undefined
  >();
  const [editing, setEditing] = useState<boolean>(false);
  const [autocompleteValue, setAutocompleteValue] = useState<string>("");
  const [date, setDate] = useState<Date | null>();
  const [startTime, setStartTime] = useState<Date | null>();

  useEffect(() => {
    (async () => {
      const result = await fetch(`${APIPath}`);
      const body = await result.json();
      console.log(body);
      setReservationsList(body.reservations);
    })();
    console.log("reservations ", reservationsList);
  }, [reservationSelected]);

  const selectedReservation = (
    event: React.SyntheticEvent,
    newValue: string | null
  ) => {
    const reservation = reservationsList.find(
      (reservation) => reservation.host_name === newValue
    );
    setReservationSelected(reservation);
    setTemporalReservation(reservation);
    if (reservation) {
      setDate(new Date(reservation.date ? reservation.date : ""));
      setStartTime(
        new Date(
          reservation.hour ? `${reservation.date} ${reservation.hour}` : ""
        )
      );
    }
  };

  const handleOpenEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    await fetch(`${APIPath}`, {
      method: "PUT",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(temporalReservation),
    }).catch((error) => {
      setAlertMessage({ message: error, isVisible: true });
    });

    setEditing(false);
    setReservationSelected(temporalReservation);
  };

  const handleDelete = async () => {
    setEditing(false);
    await fetch(`${APIPath}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(reservationSelected),
    }).then((error) => {
      //setAlertMessage({ message: error, isVisible: true });
      setEditing(false);
      setAutocompleteValue("");
      setReservationSelected(undefined);
    });
  };

  const handleCloseEdit = () => {
    setEditing(false);
    setTemporalReservation(reservationSelected);
  };

  const handleChangeInput = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const trimValue = e.target.value.toString().trim();
    const isValid = validateField(trimValue);
    //setErrors({ ...errors, [e.target.name]: isValid });
    setTemporalReservation({
      ...temporalReservation,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (newValue: Date | null | undefined, field: string) => {
    let today = new Date(newValue ? newValue : "");
    let value, minute, hour, day, month, year;
    minute = today.getMinutes();
    hour = today.getHours();
    day = today.getUTCDate();
    month = today.getUTCMonth() + 1;
    year = today.getUTCFullYear();
    switch (field) {
      case "date":
        if (newValue) {
          value = `${month}/${day}/${year}`;
          setDate(newValue);
        }
        break;
      case "hour":
        value = `${hour}:${minute && minute < 10 ? `0${minute}` : minute}`;
        setStartTime(newValue);
        break;
    }
    setTemporalReservation({ ...temporalReservation, [field]: value });
  };

  const handleInputChange = (event: React.SyntheticEvent, value: string) => {
    setAutocompleteValue(value);
  };

  return (
    <>
      <Box sx={{ mb: 1, mt: 1 }}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          value={autocompleteValue}
          options={reservationsList.map((reservation) => reservation.host_name)}
          onChange={selectedReservation}
          onInputChange={handleInputChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Find your reservation"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Box>
      {reservationSelected && (
        <Card variant="outlined">
          <Box sx={{ m: 2 }}>
            <CardContent>
              <Restaurant />
              <Box sx={{ display: "flex", flexFlow: "row", pt: 2 }}>
                <Typography sx={{ fontSize: 20 }} variant="h5">
                  Reservation to:
                </Typography>
                <Typography sx={{ fontSize: 20, ml: 1 }} color="text.secondary">
                  {reservationSelected.host_name}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexFlow: "row", pt: 2 }}>
                {editing ? (
                  <>
                    <Grid item xs={6} md={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <FieldContainer>
                          <DesktopDatePicker
                            data-test-id="date"
                            label="Date"
                            inputFormat="MM/DD/YYYY"
                            value={date}
                            onChange={(value) => handleChange(value, "date")}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </FieldContainer>
                      </LocalizationProvider>
                    </Grid>

                    <Grid item xs={6} md={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Grid container spacing={2} rowSpacing="1rem">
                          <Grid item xs={12}>
                            <FieldContainer>
                              <TimePicker
                                data-test-id="hour"
                                ampm={false}
                                label="Hour"
                                value={startTime}
                                onChange={(value) =>
                                  handleChange(value, "hour")
                                }
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </FieldContainer>
                          </Grid>
                        </Grid>
                      </LocalizationProvider>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Typography sx={{ fontSize: 20, mr: 1 }} variant="h5">
                      <CalendarMonth />
                    </Typography>
                    <Typography sx={{ fontSize: 20 }} color="text.secondary">
                      {reservationSelected.date}
                    </Typography>
                    <Typography sx={{ fontSize: 20, ml: 3 }} variant="h5">
                      <QueryBuilder />
                    </Typography>
                    <Typography
                      sx={{ fontSize: 20, ml: 1 }}
                      color="text.secondary"
                    >
                      {reservationSelected.hour}
                    </Typography>
                  </>
                )}
              </Box>
              <Box sx={{ display: "flex", flexFlow: "row", pt: 2 }}>
                {editing ? (
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      <Diversity3 />
                    </InputLabel>
                    <Select
                      name="party_size"
                      value={
                        temporalReservation
                          ? temporalReservation.party_size
                          : reservationSelected.party_size
                      }
                      label="size"
                      onChange={handleChangeInput}
                    >
                      {Array.from(Array(22), (e, i) => {
                        return (
                          i > 0 && (
                            <MenuItem key={i} value={i}>{`${i < 21 ? i : " "} ${
                              i === 1
                                ? "person"
                                : i < 21
                                ? "people"
                                : "Larger party"
                            }`}</MenuItem>
                          )
                        );
                      })}
                    </Select>
                  </FormControl>
                ) : (
                  <>
                    <Typography sx={{ fontSize: 20, pt: 0.3 }} variant="h5">
                      <Groups2 />
                    </Typography>
                    <Typography
                      sx={{ fontSize: 20, ml: 1 }}
                      color="text.secondary"
                    >
                      {reservationSelected.party_size}
                    </Typography>
                  </>
                )}
              </Box>
            </CardContent>
            <CardActions sx={{ display: "flex", flexFlow: "row-reverse" }}>
              <Button
                size="small"
                onClick={editing ? handleCloseEdit : handleDelete}
                startIcon={<LocalDining />}
              >
                {editing ? "Cancel" : "Delete"}
              </Button>
              <Button
                size="small"
                sx={{ pr: 5 }}
                onClick={editing ? handleSave : handleOpenEdit}
                startIcon={<Dining />}
              >
                {editing ? "Save" : "Edit"}
              </Button>
            </CardActions>
          </Box>
        </Card>
      )}
    </>
  );
};
export default Reservations;
