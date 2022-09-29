import React from "react";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TimePeriodI, MeetingI } from "./App.types";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import { APIPath } from "../const";
import MeetingsList from "../components/meetingList/MeetingsList";

const App = () => {
  const [meetingsList, setMeetingsList] = React.useState<MeetingI[]>([]);
  const [timePeriod, setTimePeriod] = React.useState<TimePeriodI>(
    TimePeriodI.TODAY
  );

  const getMeetings = async () => {
    const result = await fetch(`${APIPath}getMeetings/${timePeriod}`);
    const body: MeetingI[] = await result.json();
    setMeetingsList(body);
  };

  const handleTimeChange = (value: TimePeriodI) => {
    setTimePeriod(value);
  };

  const FormRow = styled.div`
    margin: 2rem 0;
    width: 100%;
    display: flex;
    justify-content: end;
  `;

  return (
    <Container fixed>
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <Typography variant="h5" component="h5">
            <h1>Meetings Demo App</h1>
          </Typography>
          <Typography>Select what meetings you would like to see</Typography>

          <FormRow>
            <Select
              placeholder="Select time"
              variant="outlined"
              labelId="select-time"
              id="select-time"
              value={timePeriod}
              label="Time Period"
              fullWidth={true}
              onChange={(e) => handleTimeChange(e.target.value as TimePeriodI)}
            >
              <MenuItem value={TimePeriodI.ALL}>
                All
              </MenuItem>
              <MenuItem value={TimePeriodI.TODAY}>Today's Meetings</MenuItem>
              <MenuItem value={TimePeriodI.TOMORROW}>
                Tomorrow's Meetings
              </MenuItem>
            </Select>
          </FormRow>

          <FormRow>
            <Button onClick={getMeetings} variant="outlined">
              Get Meetings
            </Button>
          </FormRow>

          {!!meetingsList.length && <MeetingsList data={meetingsList} />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
