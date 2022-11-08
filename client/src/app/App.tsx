import React, { useEffect, useState } from "react";
import { AlertI, OauthContextI } from "./App.types";
import Reservations from "../components/reservations/Reservations";
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
import { useAuth, AuthProvider } from "react-oauth2-pkce";
import TabPanel from "../components/tabPanel/TabPanel";
import {
  AlertContext,
  defaultAlertContextValue,
} from "../contexts/AlertContext";
import {
  defaultOauthContextValue,
  OauthContext,
} from "../contexts/OauthContext";
import oauthService from "../services/oauth";

const App = () => {
  console.log("oauth");
  const oauthEnabled = process.env["REACT_APP_OAUTH_ACTIVE"] === "true";
  const { authService } = useAuth();
  const [alert, setAlert] = useState<AlertI>(defaultAlertContextValue);
  const [oauthContext, setOauthContext] = useState<OauthContextI>(
    defaultOauthContextValue
  );
  const [currentTab, setCurrentTab] = React.useState(0);
  const theme = useTheme();

  useEffect(() => {
    const getOauth = async () => {
      if (!authService.isAuthenticated()) {
        return authService.authorize();
      }
      const { access_token, token_type } = authService.getAuthTokens();
      const authToken = `${token_type} ${access_token}`;

      if (access_token && token_type) {
        setOauthContext({ access_token, token_type, authToken });
      }
    };

    if (oauthEnabled) {
      getOauth();
    }
  }, [authService, oauthEnabled]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setCurrentTab(index);
  };

  const updateAlertContext = (newChanges: AlertI) => {
    setAlert({ ...alert, ...newChanges });
  };

  return (
    <OauthContext.Provider value={oauthContext}>
      <AlertContext.Provider value={{ ...alert, updateAlertContext }}>
        <Container fixed>
          {/* ONLY SHOWS APP IF OAUTH TOKEN IS RETRIEVED */}
          {!oauthEnabled || oauthContext.authToken ? (
            <Grid container justifyContent="center">
              <Grid item xs={12} md={10}>
                <br />
                <Typography variant="h4" component="h4">
                  Awesome Restaurant
                </Typography>
                <br />

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
                            updateAlertContext({ isVisible: false });
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

                <Tabs
                  value={currentTab}
                  onChange={handleChange}
                  aria-label="Reservations"
                >
                  <Tab value={0} label="Manage reservations" wrapped />
                  <Tab value={1} label="Create Reservation" />
                </Tabs>

                <SwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={currentTab}
                  onChangeIndex={handleChangeIndex}
                >
                  <TabPanel value={currentTab} index={0} dir={theme.direction}>
                    <br />
                    <Reservations />
                  </TabPanel>

                  <TabPanel value={currentTab} index={1} dir={theme.direction}>
                    <CreateReservation />
                  </TabPanel>
                </SwipeableViews>
              </Grid>
            </Grid>
          ) : (
            <Backdrop open={true} style={{ zIndex: 1 }}>
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
        </Container>
      </AlertContext.Provider>
    </OauthContext.Provider>
  );
};

const AppWithOauth = () => {
  return (
    <AuthProvider authService={oauthService}>
      <App />
    </AuthProvider>
  );
};

export default AppWithOauth;
