# Restaurant Reservation Demo App
The Restaurant Reservations Demo App is an example to help you get started with your first app in Exchange.

The demo app takes a typical reservations system for managing table bookings in a restaurant and enables you to integrate it into Infobip **Conversations**, **Answers** and **Moments Flow**.

In this repository, you'll find a React/NodeJS project, which is deployed to this URL:

https://restaurant-reservations-demo.azurewebsites.net/

You can also deploy the project in your favorite environment.

You can embed the demo app in Infobip in the following ways:
* context card for agents on the Conversations agent panel
* full page embedded app for supervisors in Conversations
* chatbot block in Answers
* flow element in Moments - Flow

In Conversations, the context card and full page app are loaded in an iframe.

In Answers, new features can be added to your chatbot, integrating with an API using HTTP calls.

In Moments - Flow, new features can be added to your customer engagement journey, integrating with an API using HTTP calls.

For more information on Conversations, Answers and Moments see:
* [Conversations documentation](https://www.infobip.com/docs/conversations/manage-customers)
* [Answers documentation](https://www.infobip.com/docs/answers/integrations)
* [Moments documentation](https://www.infobip.com/docs/moments/manage-flow)


## Add the app to Exchange
To integrate the pre-built demo app with Conversations, Answers and Moments Flow, you add the app to Exchange. For more information about apps in Exchange, see the [Product Docs](https://www.infobip.com/docs/integrations/exchange-developer#publishing-a-private-app).

1. Login into [Infobip](https://portal.infobip.com/).
2. Go to **Exchange** and click **Publish**.
3. Click **CREATE APP**.
4. In the **App Name** field, type a name for your demo app, for example "Reservations Manager - Demo".
5. In the **Product Selection**: **Works with** field, select **Conversations**, **Answers** and **Moments - Flow**. You'll see the manifest text areas, which show the default JSON for the selected product. When using the demo manifests, change the option to YAML.
6. Copy the content of [ManifestConversations.yml](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/ManifestConversations.yml) into the Conversations manifest text area.
7. Copy the contents of [ManifestAnswers.yml](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/ManifestAnswers.yml) into the Answers manifest text area.
8. Copy the contents of [ManifestFlow.yml](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/ManifestFlow.yml) into the Moments - Flow manifest text area.
9. Replace the uri/src with the uri of the demo app:
   `uri: https://restaurant-reservations-demo.azurewebsites.net/exchange/restaurant/reservations`
   Each function works as an HTTP method. Define the **outSchema** properties that you will send and the **inSchema** properties you will get in the response body. See the [Product Docs](https://www.infobip.com/docs/developing-with-infobip/develop-your-app#update-the-manifest) for more information.
9. (Optional) Enter the link for a project configuration page in the **Settings URL** field. You use a configuration page to manage your project's settings.
10. (Optional) Enter the **Redirect URL**. If you have deployed this project into your environment, change the URL to your own.
11. (Optional) Enter the URL of your logo.
12. Click **CREATE APP**.

You can now go to Infobip and see the app integrated into Conversations (https://portal.infobip.com/conversations), Answers (https://portal.infobip.com/bots) and Moments (https://portal.infobip.com/communications/).

## OAuth configuration
Use OAuth configuration when you need additional information about who is using this app. For example, you may need to get more data on all messages in a conversation. For this, you would need the account key, and user information like email address, phone number, and so on.

When an embedded iframe page is loading inside Conversations, you can add OAuth authorization to verify that the client (agent) that is trying to access the page has the right permissions. You can validate the session, redirecting them to your Authorization System.

When you add the app in Exchange, in the **OAuth** section of the form, the **Redirect URL** field injects an IBSSO Token into the new app. This token allows the application to be authorized for some resources that are needed to achieve a specific task.

Update the **Redirect URL** with the location of your deployed project. The Infobip platform uses the path for the OAuth flow in your app.


> ![OAuth call sequence](https://www.infobip.com/docs/images/uploads/articles/OAuth-flow.png)


For more information about OAuth, see the [OAuth2.0  documentation](https://www.infobip.com/docs/developing-with-infobip/user-journeys-flows#authorization-and-oauth-2-0-flows).

### OAuth React example
This is a code example implementation with Conversations using the OAuth PKCE library for React.

The following steps explain how this is integrated:

1. Add **react-oauth2-pkce** to your react app.
   `npm install react-oauth2-pkce --save`

2. Include env-cmd to avoid exposing sensitive data on repositories. Skip these steps if you are able to enter your credentials directly.
   `npm install env-cmd --save`
   a. Copy **.env.sample** file from that is on client folder. Rename it to **.env**.
   b. Replace the environment variables values with your own.

```sh
  REACT_APP_OAUTH_ACTIVE="true"
  REACT_APP_CLIENT_ID="eaf2lk1j940e0124f0e7c68a121c0582"
  REACT_APP_PROVIDER="https://portal.infobip.com/api/amg/exchange/1/oauth"
  REACT_APP_TOKEN="https://oneapi.ioinfobip.com/exchange/1/oauth"
  REACT_APP_REDIRECT_URI="https://restaurant-reservations-demo-oauth.azurewebsites.net/"
```

3. Create your Auth Service instance with your credentials (if you followed step 2, you will have your credentials ready on the **process.env** object).

```js
import { AuthService } from "react-oauth2-pkce";

const oauthService = new AuthService({
  clientId: process.env.REACT_APP_CLIENT_ID || "",
  provider: process.env.REACT_APP_PROVIDER || "",
  redirectUri: process.env.REACT_APP_REDIRECT_URI || "",
  scopes: ["conversations"],
  location: window.location,
});

export default oauthService;
```


4. Add AuthProvider on your app. Send the value of the service that you created in step 3.
   This example calls authService as soon as it's defined. You can trigger the login functionality with **authService.authorize()**
   After the login page prompt, the user is redirected to where redirectUri is specified. You can get tokens using **authService.getAuthTokens()**.

```js
  useEffect(() => {
    if (
      !authService.isAuthenticated() &&
      !authService.getCodeFromLocation(window.location)
    ) {
      setIsLoading(true);
      authService.authorize();
    } else {
      setIsLoading(false);
    }
  }, [authService]); 
```

This is an example of the response:

```js
{
   accountKey: "91823h-kj392-jkh8",
   email: "user@infobip.com",
   expires_at: "",
   groups: [],
   roles: [],
   token: "d8asdn-kjasd8912j-ahsdk",
   tokenType: "IBSSO",
   userKey: "123",
   userName: "user"
}
```
6. This example uses React.Context to expose OAuth token values to the app. Add a condition to give users access to the app when an access_token and token_type is successfully retrieved.


``` js
  {authService.isAuthenticated() && (
          <Grid container justifyContent="center">
            <Grid item xs={12} md={10}>
              <Typography variant="h4" component="h4">
                Awesome Restaurant
                <Button onClick={handleLogout}>Logout</Button>
              </Typography>
            </Grid>
          </Grid>
    )
   }
```

For more information about developing with Infobip, see [Exchange Developer Experience](https://www.infobip.com/docs/integrations/exchange-developer).
