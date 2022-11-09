//SETTING UP OAUTH SERVICE WITH OUR APP

import { AuthService } from "react-oauth2-pkce";

const oauthService = new AuthService({
  clientId:
    process.env.REACT_APP_CLIENT_ID || "eaf2e781440e0124f0e7c68a121c0582",
  provider:
    process.env.REACT_APP_PROVIDER ||
    "https://portal.infobip.com/api/amg/exchange/1/oauth",
  redirectUri:
    process.env.REACT_APP_REDIRECT_URI ||
    "https://restaurant-reservations-demo-oauth.azurewebsites.net/",
  scopes: ["conversations"],
  location: window.location,
});

export default oauthService;
