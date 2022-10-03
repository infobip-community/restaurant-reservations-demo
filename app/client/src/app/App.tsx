import React, { useState } from "react";
import { AlertI, TabPanelProps } from "./App.types";
import Reservations from "../components/meetingList/Reservations";
import {
  Alert,
  Tab,
  Tabs,
  Container,
  useTheme,
  IconButton,
  Typography,
  Backdrop,
  Grid,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import CreateReservation from "../components/createReservation/CreateReservation";
import CloseIcon from "@mui/icons-material/Close";
import { CircularProgress } from "@mui/material";

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

  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const handleUpdate = () => {
    // getReservation();
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

          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Reservations  "
          >
            <Tab value={0} label="My reservations" wrapped />
            <Tab value={1} label="Create Reservation" />
          </Tabs>

          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <br />
              <Reservations
                onUpdate={handleUpdate}
                setAlertMessage={handleAlertChanges}
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
