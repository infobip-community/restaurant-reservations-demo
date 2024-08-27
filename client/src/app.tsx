import React, { useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AlertI, ConfigContextI, UserContextI, UserUpdateParamsI } from "./pages/home/Home.types";
import HomePage from "./pages/home/Home";
import ConfigPage from "./pages/config/Config";
import { defaultUserContext, UserContext } from "./contexts/AuthContext";
import { defaultAlertContextValue, AlertContext } from "./contexts/AlertContext";
import { CustomerContext, defaultCustomerContext } from "./contexts/CustomerContext";
import { CONVERSATIONS_INTEGRATION_ENABLED, INFOBIP_API_BASE_URL, API_CONFIG_PATH } from "./const";
import { ConfigContext, defaultConfigContext } from "./contexts/ConfigContext";
import { AuthProvider, useAuthContext } from "./components/AuthProvider";

const AppWithOauth: React.FC = () => {
  const authContext = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [customerContext, setCustomerContext] = useState(defaultCustomerContext);
  const [userContext, setUserContext] = useState<UserContextI>(defaultUserContext);
  const [configContext, setConfigContext] = useState<ConfigContextI>(defaultConfigContext);
  const params = new URLSearchParams(window.location.search);
  const conversationId = params.get('conversationId');

  useEffect(() => {
    if (!CONVERSATIONS_INTEGRATION_ENABLED || !conversationId) {
      return;
    }

    (async () => {
      const incompatibleChannelsForIntegration = [
        'TWITTER_DM',
        'FACEBOOK_MESSENGER',
        'LIVE_CHAT',
        'INTERNAL'
      ];

      const response = await fetch(`${INFOBIP_API_BASE_URL}/ccaas/1/conversations/${conversationId}/messages`, {
        method: 'GET',
        headers: {
          Authorization: `${authContext.token_type} ${authContext.token}`,
        },
      });
      const jsonResponse = await response.json();
      const messages = jsonResponse.messages as Array<any>;

      const inboundMessages = messages.filter((message: any) => message.direction === 'INBOUND');
      if (!inboundMessages) {
        return;
      }
      if (incompatibleChannelsForIntegration.includes(inboundMessages[0]?.channel)) {
        return;
      }

      setCustomerContext({
        email: inboundMessages[0]?.content?.sender,
        name: inboundMessages[0]?.content?.senderName,
        phoneNumber: inboundMessages[0]?.from && !isNaN(+inboundMessages[0].from) ? inboundMessages[0]?.from : "",
      });
    })();
  }, [conversationId, authContext.token, authContext.token_type]);

  useEffect(() => {
    if (userContext.username) return;

    const { token, username, locale } = authContext;

    setUserContext({
      ...userContext,
      ...{
        token,
        username,
        locale,
        onLogout: () => {
          localStorage.clear();
        },
      },
    });

    setIsLoading(false);
  }, [authContext, userContext, isLoading]);

  useEffect(()=> {
    (async () => {
      const response = await fetch(`${API_CONFIG_PATH}`, {});
      const result = await response.json();
      result.config && setConfigContext({ fields: result.config.fields });
    })();
  },[]);

  const updateUserContext = (newUserContext: UserUpdateParamsI) => {
    setUserContext({ ...userContext, ...newUserContext });
  };

  return (
    <>
      <UserContext.Provider value={{ ...userContext, update: updateUserContext }}>
        <CustomerContext.Provider value={customerContext}>
          <ConfigContext.Provider value={{ ...configContext, setFields: setConfigContext }}>
            <BrowserRouter>
              <Routes>
                <Route path="/">
                  <Route index element={<HomePage />} />
                  <Route path="config" element={<ConfigPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </ConfigContext.Provider>
        </CustomerContext.Provider>
      </UserContext.Provider>
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
      <AuthProvider>
        <AppWithOauth />
      </AuthProvider>
    </AlertContext.Provider>
  );
};
export default App;
