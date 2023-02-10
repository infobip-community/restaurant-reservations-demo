# Create your first app in Exchange!

Hi! This is how you can create your app in Exchange to integrate a system with Infobip Answers and Conversations. We'll make this really easy by guiding you through the steps to get the app up and running.

## The system

We want to integrate this system with Infobip Answers and Conversations. In this repository you will find a React/NodeJS project, we have deployed this project in this url for you, use this one or deploy the project in your favorite environment.

---

### Infobip Conversations integration

This project is an app to manage reservations of your restaurant. You can create, update or delete a reservation. You can see the features opening this url.

### What are the integration I can do in Infobip Conversations?

We could have 2 types of integration in Infobip Conversations:

1.- Page - will work as a shortcut to open a page, you can access this shortcut inside the conversations window.

2.- Card - will be displayed as an embedded site in the right column of the conversations window.

![Conversation window](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/conversation%20card.png?raw=true)

### How I can integrate this app with Infobip Conversations?

To integrate the app with Conversations you need to follow the next steps:

1.- Login in https://portal.infobip.com

2.- In the left menu, go to Exchange -> Publish

3.- Click on CREATE APP button

4.- Let's fill the fields: App Name -> "Reservations Manager" In product selection: Works with -> "Conversations"

Then we have a textarea where you need to filled it with a predefined format, we already change this values for you to make it work with this reservations app, copy the content of the ManifestConversations.yml in this textarea.

##### ManifestConversations.yml
```
card:
     title: Reservation Manager
     src: https://restaurant-reservations-demo.azurewebsites.net/
     size: STANDARD
page:
    title: Reservation Manager
    src: https://restaurant-reservations-demo.azurewebsites.net/
    path: 
```
Note: if you have deployed this project in your environment change the urls values with yours.

5.- Skipped the next optionals fields Settings URL and Redirect URL 
6.- Paste the url of your logo. 
7.- Click CREATE APP button

That's all! You can now visit Infobip Conversations (https://portal.infobip.com/conversations) and you will see the Page and the Card.


![Conversation window](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/app/images/Conv%202.png?raw=true)


---

### Infobip Answers integration

This app will help you to manage reservations of a restaurant. You can find the API documentation of the project here.

#### What are the integration I can do in Infobip Answers?

You can add new features to your bot, integrating a system with an API using http calls.

####  How I can integrate this app with Infobip Answers?

To integrate the app with Answers you need to follow the next steps:

1.- Login in https://portal.infobip.com

2.- In the left menu, go to Exchange -> Publish

3.- Click on CREATE APP button

4.- Let's fill the fields:

App Name -> "Reservations Manager"

In product selection:

Works with -> "Answers"

Note: If you already have created an app skip the step 3 and edit your app, on Works with add "Answers" too.

Then we have a textarea where you need to filled it with a predefined format, we already change this values for you to make it work with this reservations app, copy the content of the ManifestAnswers.yml in this textarea in section Answers.

Each function will work as an HTTP method, you will need to define the outSchema properties that you will send and inSchema properties you will get in the response body.

##### ManifestAnswers.yml
```aidl
functions:
  - name: getAllReservations
    description: Get all reservations
    method: GET
    uri: https://restaurant-reservations-demo.azurewebsites.net/exchange/restaurant/reservations
    outSchema:
      type: object
      properties:
        reservations:
          type: object
          title: reservations
          required: true
  - name: getReservationsByEmail
    description: Get reservation by email
    method: POST
    uri: >-
      https://restaurant-reservations-demo.azurewebsites.net/exchange/restaurant/reservations/email
    inSchema:
      type: object
      properties:
        email:
          type: string
          title: email
          required: true
    outSchema:
      type: object
      properties:
        reservation:
          type: object
          title: reservation
          required: true
  - name: createReservation
    description: Creates a reservation
    method: POST
    uri: https://restaurant-reservations-demo.azurewebsites.net/exchange/restaurant/reservations/
    inSchema:
      type: object
      properties:
        date:
          type: string
          title: date
          required: true
        host_name:
          type: string
          title: host_name
          required: true
        host_email:
          type: string
          title: host_email
          required: true
        hour:
          type: string
          title: hour
          required: true
        party_size:
          type: string
          title: party_size
          required: true
    outSchema:
      type: object
      properties:
        id:
          type: string
          title: id
          required: true
        date:
          type: string
          title: date
          required: true
        host_name:
          type: string
          title: host_name
          required: true
        host_email:
          type: string
          title: host_email
          required: true
        hour:
          type: string
          title: hour
          required: true
        party_size:
          type: string
          title: party_size
          required: true
  - name: updateReservation
    description: Updates a reservation
    method: POST
    uri: https://restaurant-reservations-demo.azurewebsites.net/exchange/restaurant/reservations/
    inSchema:
      type: object
      properties:
        id:
          type: string
          title: title
          required: true
        date:
          type: string
          title: date
          required: true
        host_name:
          type: string
          title: host_name
          required: true
        host_email:
          type: string
          title: host_email
          required: true
        hour:
          type: string
          title: hour
          required: true
        party_size:
          type: string
          title: party_size
          required: true
    outSchema:
      type: object
      properties:
        date:
          type: string
          title: date
          required: true
        host_name:
          type: string
          title: host_name
          required: true
        host_email:
          type: string
          title: host_email
          required: true
        hour:
          type: string
          title: hour
          required: true
        party_size:
          type: string
          title: party_size
          required: true
  - name: deleteReservation
    description: Deletes a reservation
    method: DELETE
    uri: https://restaurant-reservations-demo.azurewebsites.net/exchange/restaurant/reservations/
    inSchema:
      type: object
      properties:
        id:
          type: string
          title: title
          required: true
```

Note: if you have deployed this project in your environment change the uri's values with yours.



5.- Skipped the next optionals fields Settings URL and Redirect URL

6.- Paste the url of your logo.

7.- Click CREATE APP button




That's all! You can now view this app in your Answers bot catalog


#### How my bot can use this element?

You will find the application "Reservations Manager" in the bottom section of the right catalog

![Reservations manager](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/app/images/View%20id.png?raw=true)


Drag the element to the bot flow, click on it and you will find the actions previously declared in the manifest (remember? the one you found an copied the ManifestAnswers.yml)

![Bot](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/app/images/Bot%201.png?raw=true)

After you select the action you want to implement, click on Response and you will have the opportunity to select which properties in the response will be assigned to the bot's attributes.

![Properties](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/app/images/Ans%201.png?raw=true)

That's it, when the values are written in the attributes you can use them to response any message.

---

# Authorizations and security

We have not implemented any security in this project, but you can clone the repository add the security and deploy it in your favorite environment.

We use a Client ID and a Secret Key per app created in Exchange, this will help you to know when Infobip platform is requesting access to your system.

How to get the Client ID and the Secret Key?

Go to [private apps](https://portal.infobip.com/exchange-partners) page and follow the next steps:

Once you have reached your apps, click on the triple dot button, then click on View ID.

![Reservations manager](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/app/images/View%20id.png?raw=true)


The previous action will start the required calls to get the information, showing a load screen.

Once this process is completed, a pop up  will be displayed and you would be able to see your Client ID or Client Secret by clicking the eye icon or copying it directly by using the clipboard icon.

![Credentials pop up](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/app/images/oaut.png?raw=true)

---
### Infobip Conversations and the Oauth security

When the embedded page is loading inside Conversations via Card or Page you can add an Oauth authorization to verify that the client (agent) that is using trying to access to your page has the right permissions, you can validate the session redirecting them to your Authorization System.

OAuth Configuration

When you are creating an app in Exchange you can see the subtitle OAuth in the form, Redirect URL field will inject an IBSSO Token into the new app. This token will allow the application to be authorized for some resources needed to achieve a specific task.

![Conversation window](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/app/images/security.png?raw=true)


The link that you enter here will be the one that Infobip platform will use as a redirect URI, so you'll need to ingress the correct path to do OAuth flow in your app.

NOTE: For more information about OAuth2.0 PKCE click [here](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow-with-proof-key-for-code-exchange-pkce).

#### React Example

In this repository you can find an example of using OAuth PKCE library for React. You can test it out [here](https://restaurant-reservations-demo-oauth.azurewebsites.net/)

Steps for integration:

1.  Add react-oauth2-pkce to your react app 

`npm install react-oauth2-pkce –save`

2.  We have also added `.env` files to avoid exposing sensitive data on repositories, you can also follow these steps or skip them if you are able to enter your credentials directly.

   2.1 Copy .env.sample file from that is on client folder to .env file

   2.2  Replace env variables values with your own client_id and redirect_uri obtained and set in exchange/partners form

```sh
  REACT_APP_OAUTH_ACTIVE="true"
  REACT_APP_CLIENT_ID="eaf2lk1j940e0124f0e7c68a121c0582"
  REACT_APP_PROVIDER="https://portal.infobip.com/api/amg/exchange/1/oauth"
  REACT_APP_TOKEN="https://oneapi.ioinfobip.com/exchange/1/oauth"
  REACT_APP_REDIRECT_URI="https://restaurant-reservations-demo-oauth.azurewebsites.net/"
```

2.3 Redirect URI has to be the same that you set up on the exchange partners site for your application, and also there you can get  the clientId for your app


![Exchange partners app](https://confluence.infobip.com/download/attachments/335395322/Screen%20Shot%202022-11-10%20at%209.37.38.png?version=1&modificationDate=1668094663000&api=v2)

3. Create your Auth Service instance with your credentials(If you followed step 2, you will have them ready on process.env object)

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

4. Wrap your app in our AuthProvider, and send the value of the service you created in step 3

```js
 const AppWithOauth = () => (
  <AuthProvider authService={oauthService}>
    <App />
  </AuthProvider>
);

export default AppWithOauth;
```

In our example, we are calling auth service as soon as it's defined. 
You can trigger login functionality with authService.authorize()
After the login page is prompted user will be redirected to where redirectUri is specified and you can get tokens using 
authService.getAuthTokens().

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

Example of response

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
6. We added a condition to only show the app content if the user is logged in using auth service isAuthentitated method

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

7. Let's try it out
  7.1 Your app should redirect the user to the Infobip Portal login page. The library `react-oauth2-pkce` will do this automatically after you set up the `provider` props in auth service.
  

![Infobip login portal](https://confluence.infobip.com/download/attachments/335395322/Screen%20Shot%202022-11-10%20at%209.31.26.png?version=1&modificationDate=1668094290000&api=v2)

  7.2 If there is an issue with the login will show you a message error

![Loggin message error](https://confluence.infobip.com/download/attachments/335395322/Screen%20Shot%202022-11-10%20at%209.49.00.png?version=1&modificationDate=1668095352000&api=v2)

  7.3 After login in successfully it will automatically redirect to your app with an `code` param that will call your `tokenProvider` url that is provided on auth service also to get the user token and information.

  7.4 If the token endpoint returns information correctly then the `authService.isAuthenticated()` method should return true and the app will be available.

![Loggin message error](https://confluence.infobip.com/download/attachments/335395322/Screen%20Shot%202022-11-10%20at%209.33.13.png?version=1&modificationDate=1668094398000&api=v2)


###### More oauth 2.0 information with examples [here](https://confluence.infobip.com/display/GOHP/OAuth+2.0)

---

### Infobip Answers and the encrypted token

For Answers we create a signature to tell you it is actually us, and we send it to you alongside its timestamp in the headers X-Ib-Exchange-Req-Signature and X-Ib-Exchange-Req-Timestamp of a POST request.

This signature is created based on two elements: your Client Secret as secret key and the timestamp value we sent you followed by your account ID with no blank spaces nor separators as the data.

In case you want to corroborate it it actually us, you can validate the signature following the sign request recipe:

Sign request recipe
Get your app's Client Secret.
Extract the timestamp from the X-Ib-Exchange-Req-Timestamp header.
Concatenate the timestamp and your account ID with no spaces nor separators between them to use it as base-string. For example, 1666752518753123456 for timestamp:1666752518753 and account ID:123456.
Use your favorite MAC (Message Authentication Code) implementation with the HmacSHA256 algorithm to hash the above base-string using your Client Secret as secret key into a hexadecimal string.
Once you have this hexadecimal text you may compare it with the X-Ib-Exchange-Req-Signature header we sent you on the request.




Step-by-step with examples

Get your app's Client Secret from the private apps page (same as above)
For this example we will be using a simple text "Hello World!" as Client Secret

```client_secret = "Hello World!"```

Extract the timestamp from the X-Ib-Exchange-Req-Timestamp header (1666752518753 for this example).

```aidl
timestamp = extract(X-Ib-Exchange-Req-Timestamp)
=> "1666752518753"
```

Concatenate the timestamp (1666752518753) and your account ID (123456 for this example) with no spaces nor separators to use it as base-string.

```
base_string = timestamp + account_id
=> "1666752518753" + "123456"
=> "1666752518753123456"
```

Hash the base_string using the Client Secret as key with a MAC (Message Authentication Code) implementation and the HmacSHA256 algorithm, then get the hexadecimal value for that hash.

```aidl
hash = Mac.useAlgorithm(HmacSHA256).withKey(client_secret).hashString(base_string)
signature = hexValue(hash)
=> "D138B40319432FF816072FC9C1B51594F73904175E9A9ED01873EB7B31E3801D"
```

Extract and compare the signature we sent you in the X-Ib-Exchange-Req-Signature header with the signature you generated.
For this example, D138B40319432FF816072FC9C1B51594F73904175E9A9ED01873EB7B31E3801D will be the signature in the header.

```aidl
header_signature = extract(X-Ib-Exchange-Req-Signature)
=> "D138B40319432FF816072FC9C1B51594F73904175E9A9ED01873EB7B31E3801D"

compare(header_signature, signature)
=> match!
```

##### Java example

Here is a Java code example for creating and hashing a signature that might be helpful:

```aidl
public class SignRequest {
	private static final String HMACSHA256_ALGORITHM = "HmacSHA256";
    private static final String CLIENT_SECRET = "Hello World!";
    private static final String ACCOUNT_ID = "123456";

	public Boolean isValid(String signature, String timestamp) {
        return signature.equals(sign(ACCOUNT_ID, timestamp, CLIENT_SECRET));
    }

	public String sign(String accountId, String timestamp, String clientSecret) {
        var data = timestamp + accountId;

        String signature = null;
        if (nonNull(clientSecret) && !data.isEmpty()) {
            signature = generateSignature(data, clientSecret);
        }

        return signature;
    }

	private String generateSignature(String data, String key) {
        var secretKeySpec = new SecretKeySpec(key.getBytes(), HMACSHA256_ALGORITHM);
        try {
            var mac = Mac.getInstance(HMACSHA256_ALGORITHM);
            mac.init(secretKeySpec);
            return bytesToHex(mac.doFinal(data.getBytes()));
        } catch (InvalidKeyException | NoSuchAlgorithmException e) {
            return "";
        }
    }

	private String bytesToHex(byte[] bytes) {
        if (bytes != null && bytes.length != 0) {
            StringBuilder hex = new StringBuilder();

            for (int i = 0; i < bytes.length; ++i) {
                hex.append(bytesToHex(bytes[i]));
            }

            return hex.toString();
        }
        return "";
    }

	private String bytesToHex(byte b) {
        int i = b & 255;
        String hex = Integer.toHexString(i).toUpperCase();
        if (hex.length() < 2) {
            hex = "0" + hex;
        }

        return hex;
    }
}
```

Calling isValid  with the signature and timestamp we sent you in the headers as parameters will return a boolean value telling if it is valid or not.

```aidl
isValid(signature, timestamp)
```


## Deploying Application to Azure

### Create [Azure](https://azure.microsoft.com/) resource
Official documentation for Azure [here](https://learn.microsoft.com)

1.- Select Create a Resource

![Azure Create Resoure](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/azure/create%20resource.png?raw=true)


2.- Select Web App option

![Azure Select Resource Type](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/azure/web%20app.png?raw=true)


3.- Select type account for azure(You can have a free trial)

![Azure Account type](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/azure/free%20trial.png?raw=true)

4.- Fill all necessary data to create your instance(You can skip other sections than basic)
Make sure you select a node version appropriate for this app. We recommend choosing Node 16 LTS

![Azure Instance Basic Details])

5.- Go to the Implementation Center Menu
![Azure Deployment Center](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/azure/deployment%20center.png?raw=true)

6.- Go to Configuration and select GIT LOCAL
![Azure Git Local](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/azure/code%20source.png?raw=true)

7.- Save And Refresh Page

8.- Go to Credentials for Local Git Credentials and add a Username/Password and Save.
 ![Azure Local Git Credentials](![image](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/azure/local%20git%20credentials.png?raw=true)
)
 
  
9.- From your local repository add the remote URL that azure created

```git remote add azure https://test.scm.azurewebsites.net:443/test.git```

10.- Before deploying make sure you created your `.env` file with your correct credentials from IB services.

`REACT_APP_REDIRECT_URI` will be your azure instance

```
REACT_APP_OAUTH_ACTIVE="true"
REACT_APP_CLIENT_ID="eaf2lk1j940e0124f0e7c68a121c0582"
REACT_APP_PROVIDER="https://portal.infobip.com/conversations/api/amg/exchange/1/oauth"
REACT_APP_REDIRECT_URI="https://restaurant-reservations-demo-oauth.azurewebsites.net/" 
REACT_APP_ACCOUNT_DOMAIN_API="l2fur4j.api.infobip.com"
REACT_APP_ACCOUNT_API_KEY="d01ssd383b9ab6-ac42abfsr272-949f3ea7a764"
REACT_APP_CONVERSATIONS_INTEGRATION="true"
```

11.- Push the master branch to azure repository
```
 git push azure master
```

12. Wait for deploy and open your app
![Azure Browse](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/azure/browse.png?raw=true)

You should see something like this:
![Demo App](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/azure/demo%20app.png?raw=true)

13. Now you can use this instance to create your Private App on Exchange for Partners and enter your URL in configurations: Manifest, Settings URL, and Oauth fields. More information about how to do this [here]()
