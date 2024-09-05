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

2. Include env-cmd to avoid exposing sensitive data on repositories. Skip these steps if you are able to enter your credentials directly.
   `npm install env-cmd --save`

   * Copy **.env.sample** file from that is on client folder. Rename it to **.env**.

   * Replace the environment variables values in the example with your own:

      * `REACT_APP_CLIENT_ID` is client ID from your app created in the Infobip Exchange,
      * `REACT_APP_REDIRECT_URI` is URL of your app where it's hosted,
      * `REACT_APP_ACCOUNT_DOMAIN_API` is API Base URL you've been given by Infobip.

      ```sh
      REACT_APP_OAUTH_ACTIVE="true"
      REACT_APP_CLIENT_ID="eaf2lk1j940e0124f0e7c68a121c0582"
      REACT_APP_REDIRECT_URI="https://restaurant-reservations-demo-oauth.azurewebsites.net"
      REACT_APP_ACCOUNT_DOMAIN_API="l2fur4j.api.infobip.com"
      
      ```

3. Create your constants `client/src/const.ts` which are used by `AuthProvider` (if you followed step 2, you will have your credentials ready on the **process.env** object).

   ```js
   export const OAUTH_ACTIVE = process.env.REACT_APP_OAUTH_ACTIVE === 'true' ?? false;
   export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? '';
   export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI ?? '';
   export const INFOBIP_API_BASE_URL = 'https://' + process.env.REACT_APP_ACCOUNT_DOMAIN_API;
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
