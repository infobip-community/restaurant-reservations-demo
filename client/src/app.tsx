import React, { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "react-oauth2-pkce";
import { Backdrop, CircularProgress } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AlertI,
  UserContextI,
  UserUpdateParamsI,
} from "./pages/home/Home.types";
import HomePage from "./pages/home/Home";
import ConfigPage from "./pages/config/Config";
import { defaultUserContext, UserContext } from "./contexts/AuthContext";
import {
  defaultAlertContextValue,
  AlertContext,
} from "./contexts/AlertContext";
import oauthService from "./services/oauth";

const AppWithOauth: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userContext, setUserContext] =
    useState<UserContextI>(defaultUserContext);
  const { authService } = useAuth();
  const authEnabled = process?.env.REACT_APP_OAUTH_ACTIVE;
  const params = new URLSearchParams(window.location.search);
  const conversationId = params.get("conversationId");
  const domain = process?.env.REACT_APP_ACCOUNT_DOMAIN_API;
  const apiKey = process?.env.REACT_APP_ACCOUNT_API_KEY;

  useEffect(() => {
    if (!conversationId) {
      return;
    }

    const options = {
      method: "GET",
      headers: {
        Authorization: `App ${apiKey}`,
      },
    };

    (async () => {
      const response = await fetch(
        `https://${domain}/ccaas/1/conversations/${conversationId}/messages`,
        options
      );
      const jsonResponse = await response.json();
      const messages = jsonResponse.messages;

      const result = messages.filter((message: any) => {
        return message.direction === "INBOUND";
      });

      if (!result) {
        return;
      }
      setUserContext({
        ...userContext,
        ...{
          customerEmail: result[0]?.content?.sender,
          customerName: result[0]?.content?.senderName,
          customerPhoneNumber:
            result[0]?.from && !isNaN(+result[0].from) ? result[0]?.from : "",
        },
      });
    })();
  }, [userContext, conversationId, apiKey, domain]);

  useEffect(() => {
    if (!authEnabled) {
      return;
    }
    if (
      !authService.isAuthenticated() &&
      !authService.getCodeFromLocation(window.location)
    ) {
      setIsLoading(true);
      (async () => {
        await authService.authorize();
      })();
      return;
    }

    if (userContext.username) return;

    const { token, username, locale } =
      authService.getAuthTokens() as unknown as UserContextI;

    setUserContext({
      ...userContext,
      ...{
        token,
        username,
        locale,
        onLogout: () => {
          localStorage.clear();
          authService.logout();
        },
      },
    });

    setIsLoading(false);
  }, [authService, authEnabled, userContext, isLoading]);

  const updateUserContext = (newUserContext: UserUpdateParamsI) => {
    setUserContext({ ...userContext, ...newUserContext });
  };

  return (
    <>
      {(!authEnabled || authService.isAuthenticated()) && (
        <UserContext.Provider
          value={{ ...userContext, update: updateUserContext }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<HomePage />} />
                <Route path="config" element={<ConfigPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      )}
      {isLoading && (
        <Backdrop open={true} style={{ zIndex: 1 }}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

const App: React.FC = () => {
  const [alert, setAlert] = useState<AlertI>(defaultAlertContextValue);

  const updateAlertContext = (newChanges: AlertI) => {
    setAlert({ ...alert, ...newChanges });
  };

  return (
    <AlertContext.Provider value={{ ...alert, updateAlertContext }}>
      <AuthProvider authService={oauthService}>
        <AppWithOauth />
      </AuthProvider>
    </AlertContext.Provider>
  );
};
export default App;
