import React, { useContext, useEffect } from "react";
import Reservations from "../../components/reservations/Reservations";
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
import CreateReservation from "../../components/createReservation/CreateReservation";
import CloseIcon from "@mui/icons-material/Close";
import { CircularProgress } from "@mui/material";
import TabPanel from "../../components/tabPanel/TabPanel";
import { AlertContext } from "../../contexts/AlertContext";
import UserMenu from "../../components/userMenu/UserMenu";
import { UserContext } from "../../contexts/AuthContext";
import { useSearchParams } from 'react-router-dom';

const HomePage: React.FC = () => {
  const theme = useTheme();
  const [currentTab, setCurrentTab] = React.useState(0);
  const authEnabled = process?.env.REACT_APP_OAUTH_ACTIVE;
  const domain = process?.env.REACT_APP_ACCOUNT_DOMAIN_API;
  const apiKey = process?.env.REACT_APP_ACCOUNT_API_KEY;
  const userContext = useContext(UserContext);
  const alert = useContext(AlertContext);
  const [searchParams] = useSearchParams();
  const conversationId = searchParams.get('conversationId');

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setCurrentTab(index);
  };

  const { update } = useContext(UserContext);
  useEffect(() => {
    (async () => {

      if(!conversationId)
        return;

        const options = {
          'method': 'GET',
          'headers': {
            'Authorization': `App ${apiKey}`
          }
        };

        const response = await fetch(`https://${domain}/ccaas/1/conversations/${conversationId}/messages`, options)
        const jsonResponse = await response.json();
        const messages = jsonResponse.messages

        const result = messages.filter( (message: any) =>
        {
          return message.direction === 'INBOUND'
        });

        if(!result)
          return;

      update({
        customerEmail: result[0]?.content?.sender,
        customerName: result[0]?.content?.senderName,
        customerPhoneNumber: result[0]?.from && !isNaN(+result[0].from) ? result[0]?.from : ''
      });

    })();
  },[update, conversationId, domain, apiKey] );

  return (
    <Container fixed>
      <Grid container spacing={2} justifyContent="center">
        <br />
        <Grid item xs={11} md={10}>
          <Typography variant="h4" component="h4">
            Awesome Restaurant
            {authEnabled && userContext?.username && <UserMenu />}
          </Typography>
        </Grid>
        <br />
        <Grid item xs={12} md={10}>
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
                      alert.updateAlertContext({ isVisible: false });
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
    </Container>
  );
};

export default HomePage;
