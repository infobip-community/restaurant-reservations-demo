import React, { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "react-oauth2-pkce";
import { Backdrop, CircularProgress } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  AlertI, UserContextI, UserUpdateParamsI } from "./pages/home/Home.types";
import HomePage from "./pages/home/Home";
import ConfigPage from "./pages/config/Config";
import { defaultUserContext, UserContext } from "./contexts/AuthContext";
import { defaultAlertContextValue, AlertContext } from "./contexts/AlertContext";
import oauthService from "./services/oauth";

const AppWithOauth: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userContext, setUserContext] =
    useState<UserContextI>(defaultUserContext);
  const { authService } = useAuth();
  const authEnabled = process?.env.REACT_APP_OAUTH_ACTIVE;

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
  export default App
