import * as React from "react";
import Restaurant from "@mui/icons-material/Restaurant";
import { ReservationI } from "../../app/App.types";
import { useContext, useState } from "react";
import { APIPath } from "../../const";

import styled from "@emotion/styled";
import {
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
import { AlertContext } from "../../contexts/AlertContext";

const FieldContainer = styled.div`
  & > div {
    width: 100%;
  }
`;

const Reservations = () => {
  const [reservationSelected, setReservationSelected] = useState<
    ReservationI | undefined
  >();
  const [editing, setEditing] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [date, setDate] = useState<Date | null>();
  const [startTime, setStartTime] = useState<Date | null>();
  const alert = useContext(AlertContext);

  const handleOpenEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    if (reservationSelected) {
      await fetch(`${APIPath}/${reservationSelected.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(reservationSelected),
      }).catch((error) => {
        alert.updateAlertContext({
          type: "error",
          message: error,
          isVisible: true,
          isLoading: false,
        });
      });
      alert.updateAlertContext({
        type: "success",
        message: "Your reservation has been updated succesfully!",
        isVisible: true,
        isLoading: false,
      });
      setEditing(false);
    }
  };

  const handleDelete = async () => {
    if (reservationSelected) {
      setEditing(false);
      await fetch(`${APIPath}/${reservationSelected.id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(reservationSelected),
      }).then(() => {
        alert.updateAlertContext({
          type: "success",
          message: "Your reservation has been deleted succesfully!",
          isVisible: true,
          isLoading: false,
        });
        setEditing(false);
        setSearchValue("");
        setReservationSelected(undefined);
      });
    }
  };

  const handleCloseEdit = () => {
    setEditing(false);
    (async () => {
      const result = await fetch(
        `${APIPath}/${reservationSelected?.host_email}`
      );
      const response = await result.json();
      if (response && response.id) {
        setReservationSelected(response);
        setDate(new Date(response.date ? response.date : ""));
        setStartTime(
          new Date(response.hour ? `${response.date} ${response.hour}` : "")
        );
      }
    })();
  };

  const handleChangeInput = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    setReservationSelected({
      ...reservationSelected,
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
    setReservationSelected({ ...reservationSelected, [field]: value });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const handleSearch = () => {
    (async () => {
      const result = await fetch(`${APIPath}/${searchValue}`);
      const response = await result.json();

      if (response && response.id) {
        setReservationSelected(response);
        setDate(new Date(response.date ? response.date : ""));
        setStartTime(
          new Date(response.hour ? `${response.date} ${response.hour}` : "")
        );
        alert.updateAlertContext({
          isVisible: true,
          type: "success",
          isLoading: false,
          message: "",
        });
      } else {
        setReservationSelected(undefined);
        alert.updateAlertContext({
          type: "error",
          message: response.error,
          isVisible: true,
          isLoading: false,
        });
      }
    })();
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={10} md={11}>
          <TextField
            fullWidth
            type="search"
            onChange={handleInputChange}
            label="Enter your email"
            onKeyDown={handleKeyDown}
          />
        </Grid>
        <Grid
          item
          xs={2}
          md={1}
          justifyContent="center"
          justifyItems="center"
          display="flex"
        >
          <Button disabled={!searchValue.length} onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Grid>
      <br />
      {reservationSelected && (
        <Card variant="outlined">
          <Box sx={{ m: 2, pd: 2 }}>
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
                                minutesStep={30}
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
                      value={reservationSelected.party_size}
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
