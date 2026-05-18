# Restaurant Reservation Demo App
The Restaurant Reservations Demo App is an example to help you get started with your first app in Exchange.

The demo app takes a typical reservations system for managing table bookings in a restaurant and enables you to integrate it into Infobip **Conversations**, **Answers** and **Moments Flow**.

In this repository, you'll find a React/NodeJS project, which is deployed under these URLs:

* https://restaurant-reservations-demo.azurewebsites.net - with disabled OAuth
* https://restaurant-reservations-demo-oauth.azurewebsites.net - with enabled OAuth

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

## Requirements

- **Node.js** >= 24.15.0
- **npm** >= 11.10.0

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React 19, TypeScript 5, Vite 8 |
| UI components | MUI v9 (`@mui/material`, `@mui/x-date-pickers`) |
| Routing | React Router v7 |
| Backend | Node.js, Express 5 |
| Database | lowdb (JSON file) |

## OAuth configuration
Use OAuth configuration when you need additional information about who is using this app. For example, you may need to get more data on all messages in a conversation. For this, you would need the account key, and user information like email address, phone number, and so on.

When an embedded iframe page is loading inside Conversations, you can add OAuth authorization to verify that the client (agent) that is trying to access the page has the right permissions. You can validate the session, redirecting them to your Authorization System.

When you add the app in Exchange, in the **OAuth** section of the form, the **Redirect URL** field injects an IBSSO Token into the new app. This token allows the application to be authorized for some resources that are needed to achieve a specific task.

Update the **Redirect URL** with the location of your deployed project. The Infobip platform uses the path for the OAuth flow in your app.


> ![OAuth call sequence](https://infobip-cdn-h0h7ekhqhgh4hgau.a02.azurefd.net/1g8x60m5haaeebc38sw9etdnqwq2orfxs6yjtxwklw767cqz71/oauth-flow-iframe-page.png)


For more information about OAuth, see the [OAuth2.0  documentation](https://www.infobip.com/docs/developing-with-infobip/user-journeys-flows#authorization-and-oauth-20-flows).

### OAuth React example
This is a code example implementation with Conversations using OAuth PKCE.

The following steps explain how this is integrated:

1. Copy `client/src/components/AuthProvider.tsx` to your React app. It contains the whole OAuth logic.

2. Copy **.env.sample** from the `client` folder, rename it to **.env**, and replace the values with your own:

   * `VITE_CLIENT_ID` — client ID from your app created in Infobip Exchange
   * `VITE_REDIRECT_URI` — URL where your app is hosted
   * `VITE_ACCOUNT_DOMAIN_API` — API Base URL provided by Infobip

   ```sh
   VITE_OAUTH_ACTIVE="true"
   VITE_CLIENT_ID="eaf2lk1j940e0124f0e7c68a121c0582"
   VITE_REDIRECT_URI="https://restaurant-reservations-demo-oauth.azurewebsites.net"
   VITE_ACCOUNT_DOMAIN_API="l2fur4j.api.infobip.com"
   ```

   > **Note:** The project uses Vite, so environment variables use the `VITE_` prefix and are accessed via `import.meta.env` instead of `process.env`. Variables without the `VITE_` prefix are not exposed to the browser.

3. The constants in `client/src/const.ts` are already configured to read from `import.meta.env`:

   ```js
   export const OAUTH_ACTIVE = import.meta.env.VITE_OAUTH_ACTIVE === 'true';
   export const CLIENT_ID = import.meta.env.VITE_CLIENT_ID ?? '';
   export const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI ?? '';
   export const INFOBIP_API_BASE_URL = 'https://' + import.meta.env.VITE_ACCOUNT_DOMAIN_API;
   ```

4. Add `AuthProvider` component to your app:

   ```js
   <AuthProvider>
      <!-- Here you can put your app (React components) which will be protected by OAuth and visible only by authenticated users. -->
      <YourApp />
   </AuthProvider>
   ```

5. Then you can import `useAuthContext` from `AuthProvider` in `YourApp` component (or wherever underneath) where you can use info about user. The info is available under property `token` (`useAuthContext().token`) and here is an example how it looks like:

   ```js
   {
      accountKey: "91823h-kj392-jkh8",
      email: "user@infobip.com",
      expires_at: 3600,
      groups: [],
      roles: [],
      token: "d8asdn-kjasd8912j-ahsdk",
      tokenType: "IBSSO",
      userKey: "123",
      userName: "user"
   }
   ```

   If you want to call other Infobip API endpoints, just add the following header to requests:

   ```js
   Auhtorization: ${authContext().authorization}
   ```

For more information about developing with Infobip, see [Exchange Developer Experience](https://www.infobip.com/docs/integrations/exchange-developer).
