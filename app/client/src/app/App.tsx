import React, { useCallback, useEffect, useState } from "react";
import { AlertI, MeetingI, TabPanelProps, TimeFrameI } from "./App.types";
import styled from "@emotion/styled";
import { APIPath } from "../const";
import Reservations from "../components/meetingList/Reservations";
import {
  Alert,
  Tab,
  Tabs,
  Select,
  MenuItem,
  Grid,
  Typography,
  Container,
  InputLabel,
  FormControl,
  useTheme,
  IconButton,
  Backdrop,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import CreateReservation from "../components/createReservation/CreateReservation";
import CloseIcon from "@mui/icons-material/Close";
import { CircularProgress } from "@mui/material";

const FormRow = styled.div`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const AlertContext = React.createContext<AlertI>({
  isLoading: false,
  isVisible: false,
  type: "success",
  message: "Meeting successfully updated",
});

const App = () => {
  const [alert, setAlert] = useState<AlertI>({
    isLoading: false,
    isVisible: false,
    type: "success",
    message: "Meeting successfully updated",
  });

  const [meetingsList, setMeetingsList] = React.useState<MeetingI[]>([]);
  const [timeframe, setTimeframe] = React.useState<TimeFrameI>(
    TimeFrameI.TODAY
  );
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const getMeetings = useCallback(async () => {
    const params =
      timeframe !== TimeFrameI.ALL ? `?timeframe=${timeframe}` : "";
    const result = await fetch(`${APIPath}${params}`);
    const body = await result.json();
    setMeetingsList(body.meetings);
  }, [timeframe]);

  useEffect(() => {
    getMeetings();
  }, [getMeetings, value]);

  const handleTimeChange = (value: TimeFrameI) => {
    setTimeframe(value);
  };

  const handleUpdate = () => {
    getMeetings();
  };

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <div>{children}</div>}
      </div>
    );
  }

  const handleAlertChanges = (newChanges: AlertI) => {
    setAlert({ ...alert, ...newChanges });
  };

  return (
    <Container fixed>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10}>
          <br />
          <Typography variant="h4" component="h4">
            Awesome Restaurant
          </Typography>
          <br />

          <AlertContext.Provider value={alert}>
            <Backdrop open={!!alert.isLoading} style={{ zIndex: 1 }}>
              <CircularProgress color="inherit" />
            </Backdrop>

            {alert.isVisible && (
              <>
                <Alert
                  severity={alert.type}
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        handleAlertChanges({ isVisible: false });
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  {alert.message}
                </Alert>
                <br />
              </>
            )}
          </AlertContext.Provider>

          <Tabs value={value} onChange={handleChange} aria-label="Meetings">
            <Tab value={0} label="My reservations" wrapped />
            <Tab value={1} label="Create Reservation" />
          </Tabs>

          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
                <Reservations
                  data={meetingsList}
                  onUpdate={handleUpdate}
                  setAlertMessage={handleAlertChanges}
                  isLoading={!!alert.isLoading}
                />
            </TabPanel>

            <TabPanel value={value} index={1} dir={theme.direction}>
              <CreateReservation
                setAlertMessage={handleAlertChanges}
                isLoading={!!alert.isLoading}
              />
            </TabPanel>
          </SwipeableViews>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
