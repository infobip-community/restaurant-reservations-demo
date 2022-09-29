import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker, TimePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { DateTimeTypes } from "./DateTime.types";
import styled from "@emotion/styled";

const FieldContainer = styled.div`
  display: flex;
  min-width: 11rem;
`;

const DateTime = ({
  date,
  endTime,
  startTime,
  handleChange,
}: DateTimeTypes) => {
  return (
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
      <FieldContainer>
        <TimePicker
          data-test-id="startTime"
          label="Start time"
          value={startTime}
          onChange={(value) => handleChange(value, "start_time")}
          renderInput={(params) => <TextField {...params} />}
        />
      </FieldContainer>
      <FieldContainer>
        <TimePicker
          data-test-id="endTime"
          label="End time"
          value={endTime}
          onChange={(value) => handleChange(value, "end_time")}
          renderInput={(params) => <TextField {...params} />}
        />
      </FieldContainer>
    </LocalizationProvider>
  );
};

export default DateTime;
