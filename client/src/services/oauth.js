//SETTING UP OAUTH SERVICE WITH OUR APP

import { AuthService } from "react-oauth2-pkce";

const oauthService = new AuthService({
  clientId: process.env.REACT_APP_CLIENT_ID || "",
  provider: process.env.REACT_APP_PROVIDER || "",
  tokenEndpoint: process.env.REACT_APP_TOKEN || "",
  redirectUri: process.env.REACT_APP_REDIRECT_URI || "",
  scopes: ["conversations"],
  location: window.location,
});

export default oauthService;
