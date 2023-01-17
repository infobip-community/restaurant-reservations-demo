import React, { useEffect, useState } from "react";
import oauthService from "./services/oauth";
import { useAuth, AuthProvider } from "react-oauth2-pkce";
import {
  AlertContext,
  defaultAlertContextValue,
} from "./contexts/AlertContext";
import { Backdrop, CircularProgress } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AlertI } from "./pages/home/Home.types";
import HomePage from "./pages/home/Home";
import ConfigPage from "./pages/config/Config";

const AppWithOauth: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
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
      authService.authorize();
    } else {
      setIsLoading(false);
    }
  }, [authService, authEnabled]);

  return (
    <>
      {(!authEnabled || authService.isAuthenticated()) && (
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<HomePage/>} />
                <Route path="config" element={<ConfigPage/>} />
              </Route>
            </Routes>
          </BrowserRouter>
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
