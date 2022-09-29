import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { EditMeetingRowPropsI } from "./EditMeetingRow.types";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import TextField from "@mui/material/TextField";
import { MeetingI } from "../../../app/App.types";
import styled from "@emotion/styled";
import DateTime from "../../shared/DateTime/DateTime";
import { Button, Grid } from "@mui/material";

const IconContainer = styled.span`
  display: flex;
  margin-right: 0.5rem;
`;

const FieldContainer = styled.div`
  display: flex;
  & > div {
    width: 100%;
  }
`;

const TableCellWithoutPadding = styled(TableCell)`
  padding-left: 0;
  padding-right: 0;
  padding-top: 8px;
`;

const ButtonsContainer = styled.div`
  justify-content: flex-end;
  display: flex;
  @media screen and (min-width: 800px) {
    flex-direction: column;
  }
`;

const EditMeetingRow = ({
  open,
  setOpen,
  data,
  isLoading,
  onSave,
  onCancel,
}: EditMeetingRowPropsI) => {
  const [meeting, setMeeting] = useState<MeetingI>(data);
  const [date, setDate] = useState<Date | null>(new Date(data.date));
  const [startTime, setStartTime] = useState<Date | null>(
    new Date(`${data.date} ${data.start_time}`)
  );
  const [endTime, setEndTime] = useState<Date | null>(
    new Date(`${data.date} ${data.end_time}`)
  );

  const handleChangeDateTime = (newValue: Date | null, field: string) => {
    let value, minute, hour, day, month, year;
    const today = new Date(newValue ? newValue : '');
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
    setMeeting({ ...meeting, [field]: value });
  };

  const handleChange = (prop: string, value: string) => {
    const meetingUpdated = { ...meeting } as any;
    meetingUpdated[prop] = value;
    setMeeting(meetingUpdated);
  };

  return (
    <>
      <TableRow>
        <TableCell component="th" scope="row" style={{ verticalAlign: "top" }}>
          <FieldContainer>
            <TextField
              label="Title"
              size="medium"
              fullWidth
              defaultValue={meeting.title}
              onChange={(e) => {
                data.title = e.target.value;
                handleChange("title", e.target.value);
              }}
            />
          </FieldContainer>
        </TableCell>
        <TableCellWithoutPadding scope="row" width={96}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "100%" },
            }}
            autoComplete="off"
          >
            <DateTime
              date={date}
              startTime={startTime}
              endTime={endTime}
              handleChange={handleChangeDateTime}
            />
          </Box>
        </TableCellWithoutPadding>
        <TableCell width={20}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <br />
            <Grid container spacing={2} rowSpacing="2rem">
              <Grid item xs={12} md={3}>
                <TextField
                  label="Description"
                  fullWidth
                  defaultValue={data.description}
                  onChange={(e) => {
                    data.description = e.target.value;
                    handleChange("description", e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  label="Host"
                  fullWidth
                  defaultValue={meeting.host}
                  onChange={(e) => {
                    data.host = e.target.value;
                    handleChange("host", e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  fullWidth
                  label="Guests"
                  defaultValue={meeting.guest}
                  onChange={(e) => {
                    data.guest = e.target.value;
                    handleChange("guest", e.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12} md={2}>
                <TextField
                  label="Room"
                  fullWidth
                  defaultValue={meeting.room}
                  onChange={(e) => {
                    meeting.room = e.target.value;
                    handleChange("where", e.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12} md={2}>
                <ButtonsContainer>
                  <Button
                    color="secondary"
                    onClick={onCancel}
                    disabled={isLoading}
                  >
                    <IconContainer>
                      <CancelIcon />
                    </IconContainer>
                    Cancel
                  </Button>
                  <Button onClick={() => onSave(meeting)} disabled={isLoading}>
                    <IconContainer>
                      <SaveIcon />
                    </IconContainer>
                    Save
                  </Button>
                </ButtonsContainer>
              </Grid>
            </Grid>
            <br />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default EditMeetingRow;
