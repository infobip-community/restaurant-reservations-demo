//SETTING UP OAUTH SERVICE WITH OUR APP

import { AuthService } from "react-oauth2-pkce";

const oauthService = new AuthService({
  clientId: "eaf2e781440e0124f0e7c68a121c0582",
  authorizeEndpoint: "https://portal.infobip.com/api/amg/exchange/1/oauth",
  tokenEndpoint: "https://oneapi.infobip.com/exchange/1/oauth",
  redirectUri: "https://restaurant-reservations-demo-oauth.azurewebsites.net/",
  scopes: ["conversations"],
  location: window.location,
});

export default oauthService;
