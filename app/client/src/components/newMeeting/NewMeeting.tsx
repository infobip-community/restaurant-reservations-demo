import * as React from "react";
import { TextField } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import {ErrorI, MeetingI} from "../../app/App.types";
import { APIPath } from "../../const";
import { NewMeetingPropsI } from "./NewMeeting.types";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker, TimePicker } from "@mui/x-date-pickers";
import { validateField , isMeetingValid } from "../shared/Validations/Validations";

const TODAY = new Date();
const REQUIRED_FIELD_ERROR_MESSAGE = 'This is a required field';
const emptyMeeting = {
  id: "",
  title: "",
  room: "",
  description: "",
  start_time: `${TODAY.getHours()}:${TODAY.getMinutes()}`,
  end_time: `${TODAY.getHours()}:${TODAY.getMinutes()}`,
  date: `${
    TODAY.getUTCMonth() + 1
  }/${TODAY.getUTCDate()}/${TODAY.getUTCFullYear()}`,
  host: "",
  guest: "",
};

const errorObject = {
  title: false,
  room: false,
  description: false,
  host: false,
  guest: false,
};

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  & > button {
  width: 100%
  }
`;

const FieldContainer = styled.div`
  & > div {
    width: 100%;
  }
`;

const NewMeeting = ({ setAlertMessage, isLoading }: NewMeetingPropsI) => {
  const [newMeeting, setNewMeeting] = useState<MeetingI>(emptyMeeting);
  const [errors, setErrors] = useState<ErrorI>(errorObject);
  const [date, setDate] = useState<Date | null>(new Date());
  const [startTime, setStartTime] = useState<Date | null>(new Date());
  const [endTime, setEndTime] = useState<Date | null>(new Date());

  const handleChange = (newValue: Date | null, field: string) => {
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
      case "start_time":
        value = `${hour}:${minute && minute < 10 ? `0${minute}` : minute}`;
        setStartTime(newValue);
        break;
      case "end_time":
        value = `${hour}:${minute && minute < 10 ? `0${minute}` : minute}`;
        setEndTime(newValue);
        break;
    }
    setNewMeeting({ ...newMeeting, [field]: value });
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimValue = e.target.value.trim();
    const isValid = validateField(trimValue);
    setErrors({ ...errors, [e.target.id.toString()]: isValid })
    setNewMeeting({ ...newMeeting, [e.target.id.toString()]: e.target.value });
  };

  const addMeeting = async () => {
    setAlertMessage({ isLoading: true });
    await fetch(`${APIPath}`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMeeting),
    });
    setAlertMessage({
      message: "Meeting successfully created!",
      isVisible: true,
      isLoading: false,
    });
    setNewMeeting({ ...emptyMeeting });
  };

  return (
    <>
      <br />
      <Grid container spacing={2} rowSpacing="1rem">
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={errors.title}
            id="title"
            label="Title"
            value={newMeeting.title}
            onChange={handleChangeInput}
            helperText={errors.title ? REQUIRED_FIELD_ERROR_MESSAGE : ''}
          />
        </Grid>

        <Grid item xs={12} md={12}>
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

        <Grid item xs={12} md={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={2} rowSpacing="1rem">
              <Grid item xs={6}>
                <FieldContainer>
                  <TimePicker
                    data-test-id="startTime"
                    ampm={false}
                    label="Start time"
                    value={startTime}
                    onChange={(value) => handleChange(value, "start_time")}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </FieldContainer>
              </Grid>
              <Grid item xs={6}>
                <FieldContainer>
                  <TimePicker
                    data-test-id="endTime"
                    ampm={false}
                    label="End time"
                    value={endTime}
                    onChange={(value) => handleChange(value, "end_time")}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </FieldContainer>
              </Grid>
            </Grid>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={errors.guest}
            id="guest"
            label="Guest"
            value={newMeeting.guest}
            onChange={handleChangeInput}
            helperText={errors.guest ? REQUIRED_FIELD_ERROR_MESSAGE : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={errors.host}
            id="host"
            label="Host"
            value={newMeeting.host}
            onChange={handleChangeInput}
            helperText={errors.host ? REQUIRED_FIELD_ERROR_MESSAGE : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={errors.room}
            id="room"
            label="Room"
            value={newMeeting.room}
            onChange={handleChangeInput}
            helperText={errors.room ? REQUIRED_FIELD_ERROR_MESSAGE : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            rows={2}
            id="description"
            error={errors.description}
            label="Description"
            multiline={true}
            value={newMeeting.description}
            onChange={handleChangeInput}
            helperText={errors.description ? REQUIRED_FIELD_ERROR_MESSAGE : ''}
          />
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <ButtonContainer>
            <Button
              size={"large"}
              onClick={addMeeting}
              variant="contained"
              disabled={isLoading || isMeetingValid(errors)}
            >
              Add
            </Button>
          </ButtonContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default NewMeeting;
