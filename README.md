
### Restaurant Reservation Demo App

The Demo App for Exchange is a sample app to help you to create your first app in Exchange. The Demo App integrates a typical system for managing reservations in a restaurant with Infobip Answers, Conversations and Moments - Flow.

We'll guide you through the step-by-step instructions for designing, configuring, and installing the app.

In this repository, you'll find a React/NodeJS project, which is deployed to this URL. Use this [URL](https://restaurant-reservations-demo.azurewebsites.net/) or deploy the project in your favorite environment.

### How does the app work in Conversations?

This project is an app to manage reservations for a restaurant. You can create, update, or delete a reservation.
You can see the features by opening this URL: [https://restaurant-reservations-demo.azurewebsites.net/](https://restaurant-reservations-demo.azurewebsites.net/)

### What can I integrate into Infobip Conversations?

You can have two types of integration in Infobip Conversations:

1.- **Page**  - opens a full page for functionality across multiple conversations.

2.- **Card**  - an embedded card in the right column of a single conversations window.


This Demo App creates a new context card within the Agent experience in the Conversations dashboard.

To integrate the app with Conversations:

1.- Login into the [web interface](https://portal.infobip.com/)

2.- In the left menu, go to **Exchange**  -> **Publish**

3.- Click on **CREATE APP**

4. In the **App** Name field, type "Reservations Manager".

5. In the **Product Selection**: **Works with** field, select "Conversations".

You then see a text area containing a predefined Conversations format containing the right values for the reservations app. Copy the content of the ManifestConversations.yml into this text area.


##### ManifestConversations.yml
```
card:
     title: Reservation Manager
     src: https://restaurant-reservations-demo.azurewebsites.net/
     size: STANDARD
page:
    title: Reservation Manager
    src: https://restaurant-reservations-demo.azurewebsites.net/
    path: /
```
Note: If you have deployed this project into your environment, change the url values to your own.

5. Skip the next two optional fields (**Settings URL** and **Redirect URL**).

6. Paste the URL of your logo.

7. Click **CREATE APP**.

That's all! You can now go to Infobip Conversations (https://portal.infobip.com/conversations) and you will see the **Page** and the **Card**.


![Conversation window](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/conversation%20card.png?raw=true)


---

### How does the app work in Answers

This app will help you to manage reservations at a restaurant.

#### What can I integrate into Infobip Answers?

You can add new features to your bot, integrating a system with an API using HTTP calls.

To integrate the app with Answers:

1. Login in (https://portal.infobip.com)

2. In the left menu, go to Exchange -> Publish

3. Click on CREATE APP button

4. In the **App Name** field, type "Reservations Manager".

5. In the **Product Selection: Works with** field, select "Answers".

Note: If you have already created an app, skip steps 1-3. Then, you need to edit your app and also select "Answers" on the **Product Selection: Works with** field.

You then see a text area containing a predefined Answers format containing the right values for the reservations app. Copy the content of the `ManifestAnswers.yml` into this text area.


Each function will work as an HTTP method, so you will need to define the **inSchema** properties that you will send and the **outSchema** properties you will get in the response body.

##### ManifestAnswers.yml
```yaml
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
    method: GET
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

Note: If you have deployed this project in your environment, change the uri values to your own.

6. Skipped the optionals fields **Settings URL** and **Redirect URL**.

7. In the **Logo** field, paste the URL of your logo.

8. Click **CREATE APP**.


That's all! You can now view this app in your Answers bot catalog


#### How my bot can use this element?

You will find the "Reservations Manager" app in the **Chatbot integrations** section of the right-side catalog.


![Reservations manager](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/reservation%20bot.png?raw=true)


Drag the element to the bot flow. When it is in the flow, click on it and you will see the actions previously declared in the manifest (from the ManifestAnswers.yml file).


![Bot](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/reservation%20bot%20get%20by%20email.png?raw=true)

Choose the function that you want to implement from the drop-down list, and then click the **Response** tab. Then, select which properties in the response that will be assigned to the bot's attributes.


![Properties](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/response%20attributes.png?raw=true)

When the values are written in the attributes, you can use them to respond any message.

---
### How does the app work in Moments - Flow
This app will help you to manage reservations at a restaurant.

#### What can I integrate into Infobip Moments - Flow?

You can add new features to your Flow, integrating a system with an API using HTTP calls.

To integrate the app with Flow:

1. Login in (https://portal.infobip.com)

2. In the left menu, go to Exchange -> Publish

3. Click on CREATE APP button

4. In the **App Name** field, type "Reservations Manager".

5. In the **Product Selection: Works with** field, select "Moments - Flow".

Note: If you have already created an app, skip steps 1-3. Then, you need to edit your app and also select "Moments - Flow" on the **Product Selection: Works with** field.

You then see a text area containing a predefined Flow format containing the right values for the reservations app. Copy the content of the `ManifestFlow.yml` into this text area.


Each function will work as an HTTP method, so you will need to define the **inSchema** properties that you will send and the **outSchema** properties you will get in the response body.

##### [ManifestFlow.yml](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/examples/ManifestFlow.yml)
```yaml
functions:
  - name: Get all reservations
    method: GET
    description: Get all reservations
    uri: >-
      https://restaurant-reservations-demo.azurewebsites.net/exchange/restaurant/reservations
    inSchema: {}
    outSchema:
      properties:
        _id:
          items:
            - properties:
                date:
                  title: Reservation date
                  type: string
                host_email:
                  title: Host's email
                  type: string
                host_name:
                  title: Host's Name
                  type: string
                hour:
                  title: Reservation time
                  type: string
                id:
                  title: Reservation ID
                  type: string
                party_size:
                  title: Number of participants
                  type: number
              type: object
          selectViewOptionIdPath: $.reservations[*].id
          selectViewOptionNamePath: $.reservations[*].host_email
          type: array
      type: object
  - name: Create reservation
    method: POST
    description: Creates a reservation
    uri: >-
      https://restaurant-reservations-demo.azurewebsites.net/exchange/restaurant/reservations
    inSchema:
      properties:
        date:
          title: Reservation date
          type: string
        host_email:
          title: Host's email
          type: string
        host_name:
          title: Host's Name
          type: string
        hour:
          title: Reservation time
          type: string
        party_size:
          title: Number of participants
          type: number
      required:
        - date
        - host_name
        - host_email
        - hour
        - party_size
      type: object
    outSchema:
      properties:
        date:
          title: Reservation date
          type: string
        host_email:
          title: Host's email
          type: string
        host_name:
          title: Host's Name
          type: string
        hour:
          title: Reservation time
          type: string
        id:
          title: Reservation ID
          type: string
        party_size:
          title: Number of participants
          type: number
      type: object
  - name: Update reservation
    method: PUT
    description: Updates a reservation
    uri: >-
      https://restaurant-reservations-demo.azurewebsites.net/exchange/restaurant/reservations/{id}
    inSchema:
      properties:
        _id:
          title: Reservation ID
          type: string
        date:
          title: Reservation date
          type: string
        host_email:
          title: Host's email
          type: string
        host_name:
          title: Host's Name
          type: string
        hour:
          title: Reservation time
          type: string
        party_size:
          title: Number of participants
          type: number
      required:
        - _id
      type: object
    outSchema:
      properties:
        date:
          title: Date
          type: string
        host_email:
          title: Host Email
          type: string
        host_name:
          title: Host Name
          type: string
        hour:
          title: Hour
          type: string
        id:
          title: Reservation ID
          type: string
        party_size:
          title: Party Size
          type: number
      type: object
  - name: Delete reservation
    method: DELETE
    description: Deletes a reservation
    uri: >-
      https://restaurant-reservations-demo.azurewebsites.net/exchange/restaurant/reservations/{id}
    inSchema:
      properties:
        _id:
          title: Reservation ID
          type: string
      required:
        - _id
      type: object
    outSchema: {}
actions:
  - name: Create reservation
    render:
      - field: host_name
        viewClass: TextFieldView
        personalization: true
        dependencies: []
      - field: host_email
        viewClass: TextFieldView
        personalization: true
        dependencies: []
      - field: date
        viewClass: TextFieldView
        personalization: true
        dependencies: []
      - field: hour
        viewClass: TextFieldView
        personalization: true
        dependencies: []
      - field: party_size
        viewClass: TextFieldView
        personalization: true
        dependencies: []
    async: false
  - name: Update reservation
    render:
      - field: _id
        viewClass: SelectView
        model: Get all reservations
        personalization: false
        dependencies: []
      - field: host_name
        viewClass: TextFieldView
        personalization: true
        dependencies: []
      - field: host_email
        viewClass: TextFieldView
        personalization: true
        dependencies: []
      - field: date
        viewClass: TextFieldView
        personalization: true
        dependencies: []
      - field: hour
        viewClass: TextFieldView
        personalization: true
        dependencies: []
      - field: party_size
        viewClass: TextFieldView
        personalization: true
        dependencies: []
    async: false
  - name: Delete reservation
    render:
      - field: _id
        viewClass: SelectView
        model: Get all reservations
        personalization: false
        dependencies: []
    async: false
triggers: []
```
Note: If you have deployed this project in your environment, change the uri values to your own.

6. Skipped the optionals fields **Settings URL** and **Redirect URL**.

7. In the **Logo** field, paste the URL of your logo.

8. Click **CREATE APP**.


That's all! You can now view this app in your Flow editor.


#### How Flow can use this element?

After adding an Entry point to your Flow, you will find the app's actions listed in the Select element option, under Integrations.

![Reservations Manager](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/FlowApps.png?raw=true)


Select the app action you want to add. When it is in the flow, click on it and you will see the actions previously declared in the manifest (from the ManifestFlow.yml file).

![Flow](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/FlowFieldMapping.png?raw=true)


Enter the values needed for the Input and Output of the element. Note, depending on how the manifest is prepared, users can include static data, Flow and People attributes, or select options from a SelectView list.
![Field mapping](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/FlowFields.png?raw=true)


When output values are written in the attributes, you can use them later in the Flow, or they can be stored to a profile in People.

---
## Authorizations and security

For authorization, use a Client ID and a Secret Key for each app created in Exchange. This helps you to identify when the Infobip platform is requesting access to your system.

### How to get the Client ID and the Secret Key?

Go to [Private Apps](https://portal.infobip.com/exchange-partners) page, and then follow the these steps:

1. Click on the three dots menu, and then select **View ID**.

![Reservations manager](https://github.com/infobip-community/restaurant-reservations-demo/raw/main/client/images/view%20id.png?raw=true)

2. The **View ID** action will start the required calls to get the information, and you see a load screen.

![Credentials pop up](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/oauth%20loading.png?raw=true)

3. When this process is complete, you will see a pop up displaying the OAuth Credentials. To view your Client ID or Client Secret, click the eye icon or copy it directly by using the clipboard icon.

![Credentials pop up](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/oauth%20credentials.png?raw=true)


### How to get the Signing Secret?
Go to [Private Apps] (https://portal.infobip.com/exchange/partners) page and follow the these steps:

1. Click on the three dots menu, and then select **Edit**.

![Credentials pop up](https://github.com/infobip-community/restaurant-reservations-demo/raw/main/client/images/view%20id.png?raw=true)


2. Go to the Security section at the bottom of the **Edit** page to find the Signing secret for your Webhooks. To view your **Signing secret**, click the eye icon or copy it directly by using the clipboard icon.

![Credentials pop up](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/webhooks.png?raw=true)

---
### Infobip Conversations and the Oauth security

When the embedded page is loading inside Conversations via a Card or a Page, you can add OAuth authorization to verify that the client (agent) that is trying to access the page has the right permissions. You can validate the session, redirecting them to your Authorization System.

#### OAuth Configuration
When you create an app in Exchange, you see that there is an **OAuth** section of the form. The **Redirect URL** field will inject an IBSSO Token into the new app. This token allows the application to be authorized for some resources that are needed to achieve a specific task.

![Oauth Configuration](https://github.com/infobip-community/restaurant-reservations-demo/raw/main/client/images/security.png?raw=true)

The Infobip platform will use the link that you enter as a redirect URI, so you'll need to input the correct path to do OAuth flow in your app.

NOTE: For more information, see the [OAuth2.0 PKCE documentation](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow-with-proof-key-for-code-exchange-pkce).

#### React Example

This is a code example implementation with Conversations using the OAuth PKCE library for React.

The following steps explain how this is integrated.

Steps for integration:

1. Add **react-oauth2-pkce** to your react app.

`npm install react-oauth2-pkce –save`

2. Include env-cmd to avoid exposing sensitive data on repositories. Skip these steps if you are able to enter your credentials directly.

`npm install env-cmd –save`

2.1 Copy **.env.sample** file from that is on client folder. Rename it to **.env**.

2.2  Replace the environment variables values with your own.

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

This example calls authService as soon as it's defined.
You can trigger the login functionality with **authService.authorize()**
After the login page prompt, the user is redirected to where redirectUri is specified. You can get tokens using
**authService.getAuthTokens()**.

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
6. This example uses React.Context to expose OAuth token values to our app. Add a condition to give users access to the app when an access_token and token_type is successfully retrieved.


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

### Try out the OAuth configuration

1. Your app should redirect you to the Infobip web interface login page. The **react-oauth2-pkce** library will do this automatically after you set up the provider properties in AuthService.

![Infobip login portal](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/login.png?raw=true)

2. If there is an issue with the login, you will see the following error message:

![Loggin message error](https://github.com/infobip-community/restaurant-reservations-demo/raw/main/client/images/error.png?raw=true)

3. If you have logged in successfully, you are automatically redirected to your app with a **code** parameter. This parameter calls your **tokenProvider** URL that is provided on the AuthService, and also gets the user token and information.


4. If the token endpoint returns information correctly, then the **authService.isAuthenticated()** method will return true and the app will be available.

![Loggin message error](https://github.com/infobip-community/restaurant-reservations-demo/raw/main/client/images/azure/demo%20app.png?raw=true)


### Infobip Answers and the encrypted token

For Answers, create a signature to tell you it is actually us, and send it to you, alongside its timestamp in the headers **X-Ib-Exchange-Req-Signature** and **X-Ib-Exchange-Req-Timestamp** of a POST request.

This signature is created based on two elements: your Client Secret as **secret key** and the timestamp value sent to you, followed by your account ID with _no blank spaces nor separators_ as the data.

If you want to confirm that it is Infobip, then you can validate the signature following the sign request recipe:

#### Sign request recipe
1. Get your app's Client Secret.

2. Extract the timestamp from the **X-Ib-Exchange-Req-Timestamp** header.
3. Concatenate the timestamp and your account ID with _no spaces nor separators_ between them to use it as the **base-string**. For example, 1666752518753123456 for timestamp:1666752518753 and account ID:123456.
4. Use your favorite MAC (Message Authentication Code) implementation with the HmacSHA256 algorithm to hash the above base-string using your Client Secret as **secret key** into a hexadecimal string.
5. Once you have this hexadecimal text, you may compare it with the **X-Ib-Exchange-Req-Signature** header sent on the request.

#### Step-by-step with examples

Get your app's Client Secret from the **Private Apps** page (follow the instructions from [Authorizations and security](https://confluence.infobip.com/display/EX/Demo+app+read.me#Demoappread.me-AuthorizationsAndSecurity)).

1. This example uses a simple text **"Hello World!"** as a Client Secret.

```client_secret = "Hello World!"```

Extract the timestamp from the X-Ib-Exchange-Req-Timestamp header (**1666752518753** for this example).

```aidl
timestamp = extract(X-Ib-Exchange-Req-Timestamp)
=> "1666752518753"
```

3. Concatenate the timestamp (**1666752518753**) and your account ID (**123456** for this example) with no spaces nor separators to use it as base-string.

```
base_string = timestamp + account_id
=> "1666752518753" + "123456"
=> "1666752518753123456"
```

4. Hash the base_string using the Client Secret as the key with a MAC (Message Authentication Code) implementation and the **HmacSHA256** algorithm, and then get the hexadecimal value for that hash.

```aidl
hash = Mac.useAlgorithm(HmacSHA256).withKey(client_secret).hashString(base_string)
signature = hexValue(hash)
=> "D138B40319432FF816072FC9C1B51594F73904175E9A9ED01873EB7B31E3801D"
```
5. Extract and compare the signature sent to you in the X-Ib-Exchange-Req-Signature header with the signature you generated.
   For this example, **D138B40319432FF816072FC9C1B51594F73904175E9A9ED01873EB7B31E3801D** will be the signature in the header.

```aidl
header_signature = extract(X-Ib-Exchange-Req-Signature)
=> "D138B40319432FF816072FC9C1B51594F73904175E9A9ED01873EB7B31E3801D"

compare(header_signature, signature)
=> match!
```
#### JavaScript/Node example

Create a file to store your Signing Secret, for example, `signingSecret.txt`.

Use this example as a Signing secret key.

```aidl
aSdFHjKl1357JkLm=

```
2. Use your preferred file reader to read the Signing Secret and store it in a variable.

```js
const signingSecretFile = process.cwd() + '/signingSecret.txt';
let signingSecret = ''
try {
    fs.readFile(signingSecretFile, 'utf8', (err, data) => {
        if (err) {
            return;
        }
        signingSecret =  data;
    });
}catch (e) {
    console.log(e)
}

```
3. Create a function to compare the **X-Ib-Exchange-Req-Signature** header from the answers call with the signature that you will create with the Signing Secret.

This function will receive the data and the key as a parameter.

```aidl
//data = (timestamp + payload)
//payload = request.body (answers request body)
//timestamp = x-ib-exchange-req-timestamp (request header)
//key = signingSecret
 
const generateSignature  = (data , key) => {
  let signature = ''
  try{
    signature = Crypto.createHmac('sha256', key).update(data).digest('hex');
  }catch (e) {
 
  }
  return signature;
}

```

4.Create a method to validate both signatures to add all of your server methods (GET/POST/UPDATE/DELETE/PUT).

This function will receive the answers request as a parameter, call the previously created generateSignature function, and then return the comparison between both signatures.


```aidl
const validateSignature = (request) => {
  const timestamp = request.headers['x-ib-exchange-req-timestamp'];
  const signature = request.headers['x-ib-exchange-req-signature'];
  const payload =  JSON.stringify(request.body);
  return signature === generateSignature((timestamp+payload).trim(), signingSecret.trim());
}

```
#### Implementation example
This is a code example for implementation.

```js
app.post("/exchange/restaurant/reservations/email", async (req, res) => {
    if (validateSignature(req)){
        const reservation = await getByEmail(req.body.email).catch((error) => {
            return res.status(500).json({ error });
        });
        return res.json(reservation);
    }else{
        return res.status(401).json({ error });
    }
});
```

#### Java example

This is a Java code example for creating and hashing a signature.


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

Calling isValid  with the signature and timestamp sent in the headers as parameters will return a boolean value to show if it is valid or not.

```aidl
isValid(signature, timestamp)
```

### Deploying Application to Azure

These instructions describe how to deploy your app in Azure.

Before you start, create an [Azure](https://azure.microsoft.com/) resource. For more information on Azure, see the official [Azure documentation](https://learn.microsoft.com/).

1. In the Azure portal, click **Create a resource**

![Azure Create Resoure](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/azure/create%20resource.png?raw=true)


2. Select the **Web App** option.

![Azure Select Resource Type](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/azure/web%20app.png?raw=true)


3.- Select a subscription option for Azure (You can have a free trial).

![Azure Account type](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/azure/free%20trial.png?raw=true)

4. Complete the instance details (if you complete the basic information, you can skip the other sections). Make sure that you select a node version that is appropriate for this app. For example, Node 16 LTS.


![Azure Instance Basic Details](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/azure/create%20web%20app.png?raw=true)

5. Go to the **Deployment Center** menu.

![Azure Deployment Center](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/azure/deployment%20center.png?raw=true)

6. Go to **Settings** and then select **Local Git**.

![Azure Git Local](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/azure/code%20source.png?raw=true)

7. Select **Save And Refresh the Page**.

8. Go to the credentials for **Local Git Credentials**, add a Username and Password, and click **Save**.

![Azure Local Git Credentials](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/azure/local%20git%20credentials.png?raw=true)


9. From your local repository, add the remote URL that Azure created.

```git remote add azure https://test.scm.azurewebsites.net:443/test.git```

10.- Before deploying your app, make sure that you create your .env file with the correct credentials from your Infobip services.

```
REACT_APP_OAUTH_ACTIVE="true"
REACT_APP_CLIENT_ID="eaf2lk1j940e0124f0e7c68a121c0582"
REACT_APP_PROVIDER="https://portal.infobip.com/conversations/api/amg/exchange/1/oauth"
REACT_APP_REDIRECT_URI="https://restaurant-reservations-demo-oauth.azurewebsites.net/" 
REACT_APP_ACCOUNT_DOMAIN_API="l2fur4j.api.infobip.com"
REACT_APP_ACCOUNT_API_KEY="d01ssd383b9ab6-ac42abfsr272-949f3ea7a764"
REACT_APP_CONVERSATIONS_INTEGRATION="true"
```

`REACT_APP_REDIRECT_URI` will be your azure instance

11. Push the master branch to the azure repository.
```
 git push azure master
```

12. Wait for the deployment and then open your app.
    ![Azure Browse](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/azure/browse.png?raw=true)

You should see something like this:

![Demo App](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/azure/demo%20app.png?raw=true)

13. Use this instance to create your private app on Exchange and enter your URL in the configuration for Manifest, Settings URL, and Oauth fields.

More information about how to do this [here](https://www.infobip.com/docs/integrations/exchange-developer#publishing-a-private-app).

### Conversations API Integration

Now you can see that the demo app can be loaded inside a context card, embedded inside Conversations.

![Conversations](https://github.com/infobip-community/restaurant-reservations-demo/raw/main/client/images/conversation%20card.png?raw=true)

To take advantage of the conversation in your demo app, it is possible to get some data from the query parameter conversationId that is injected in the URL. This value returns information about the current conversation and can create a feature in the demo app.

With the _conversationId_ value and the [Infobip Conversations API](https://www.infobip.com/docs/api/customer-engagement/conversations-api), it is possible to access data in the conversation, for example, details of the conversations, messages, tags, notes, agents, and so on.

### Example Feature in the Demo App

This example describes how to create a feature consuming the Infobip Conversations API. The requirement is to get customer data from the conversation, for example:

the _Phone Number_ if the customer messages via _Whatsapp_
or _Name_ and _Email Address_ if they start the conversation with an _Email_
These values are selected, depending on which channel they are using. Data is attached to the message they send, so some data is on the _Whatsapp_ channel and different data is via the _Email_ channel.

![channel](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/email%20chanel.jpeg?raw=true)

The example uses this data (Phone Number, Name, and/or Email) to automatically fill some fields in the form when the agent is creating the reservation.

![example1](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/example%20channel%201.png?raw=true)


![example2](https://github.com/infobip-community/restaurant-reservations-demo/blob/main/client/images/example%20channel%202.png?raw=true)

#### How is this implemented?

The **Get Messages** endpoint (https://www.infobip.com/docs/api/customer-engagement/conversations-api/get-messages) gives all the messages in the conversation and all the message details. This endpoint asks only for the conversationId, which is already available.

```
HTTP Request with Authorization with API key
GET https://l2XXX.api.infobip.com/ccaas/1/conversations/{conversationId}/messages
Headers:
Authentication: App YOUR_API_KEY
                
```

Note: One of the authentication methods to connect with the **Infobip API** is the API KEY. Learn more about API Key in the Infobip [API documentation](https://www.infobip.com/docs/api).

Messages response

This example shows a conversation with two messages: one saying direction: _"INBOUND"_ from our customer, and one saying direction: _"OUTBOUND"_ from our agent.

The objective is to get the message with direction: _"INBOUND"_ and read what type of channel is, in this case is _SMS_. From this channel (and from _Whatsapp_ or _Viber_) it is possible to get the Phone Number, which is in the _from_ property.

This is an example to access this property:

``` js
const settings = {
    "url": "https://l2XXX.api.infobip.com/ccaas/1/conversations/{conversationId}/messages",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Authorization": "{authorization}",
        "Accept": "application/json"
    },
};
 
$.ajax(settings).done(function (response) {
    var phoneNumber = response.messages[0].from;
    console.log(phoneNumber);
});
```

Using this example, you can integrate it into the demo app.

#### Implementing this feature in demo app

The demo app uses React, so this example implements this feature in the `app.tsx` file:

```js
const domain = process?.env.REACT_APP_ACCOUNT_DOMAIN_API;
const apiKey = process?.env.REACT_APP_ACCOUNT_API_KEY;
const conversationIntegrationEnabled = process?.env.REACT_APP_CONVERSATIONS_INTEGRATION;
const params = new URLSearchParams(window.location.search);
const conversationId = params.get("conversationId");
const notCompatibleChannelsForConversationsIntegration = ['TWITTER_DM', 'FACEBOOK_MESSENGER', 'LIVE_CHAT'];

...
useEffect(() => {
    if (!conversationIntegrationEnabled || !conversationId) return;

    const options = {
        method: "GET",
        headers: {
            Authorization: `App ${apiKey}`,
        },
    };

    (async () => {
        const response = await fetch(
            `https://${domain}/ccaas/1/conversations/${conversationId}/messages`,
            options
        );
        const jsonResponse = await response.json();
        const messages = jsonResponse.messages;

        const result = messages.filter(
            (message: any) => message.direction === "INBOUND"
        );

        if (!result) return;

        if (notCompatibleChannelsForConversationsIntegration.includes(result[0]?.channel)) return;

        setCustomerContext({
            email: result[0]?.content?.sender,
            name: result[0]?.content?.senderName,
            phoneNumber: result[0]?.from && !isNaN(+result[0].from) ? result[0]?.from : "",
        });
    })();
}, [conversationId, apiKey, domain]);
.....
```

As you can see, at the top there are some cons that help to create the request to the **Get Messages endpoint** (https://www.infobip.com/docs/api/customer-engagement/conversations-api/get-messages). Look for the conversationId in the query params and create the request. After the response is received, filter the messages from the conversation to only direction: "INBOUND".

Infobip Conversations supports many channels, and this account supports all of them, but not all of them are compatible with our features. For example,  'TWITTER_DM', 'FACEBOOK_MESSENGER', 'LIVE_CHAT' do not have a _Phone Number_, _Email_ or _Name_ to fill our form, so they are excluded.

Finally, if the customer sends a message via _Email_, you will get the _Name_ and _Email Address_ in the properties: _result[0].content.sender_ and _result[0].content.senderName_. There is a channel that has a Phone Number in this _property result[0].from_. When you have this value, add it to the context and display it in our form.

Finally, remember that the Conversations API has an extended API where you can get more functionality and use it for your business.

### People Integration

#### Infobip API authentication

All API requests have to be authenticated through the Authorization header. The Infobip APIs offer the following authentication methods:

1. HTTP Basic authentication (Basic)

2. API Keys (APIKeyHeader)

3. IBSSO Tokens (IBSSOTokenHeader)

4. OAuth 2.0 (OAuth2)

#### Basic

Basic authentication works by sending a username and password in every API request and it is the least recommended method as it is still simple to decode encrypted credentials back to their original values.

About this method

Credentials must be encoded in a Base64 format (for example, with the RFC2045-MIME variant) and separated by a colon:

encode_data('username:password')

Encoded credentials are added to the header after "Basic":

'Authorization: Basic encoded_data'

API Key Header

An API key is an access token that a client provides when making API calls. It's a simple way to secure access and is the most popular authentication method used with REST APIs.

When you create an account, you are automatically assigned an API Key (https://www.infobip.com/docs/essentials/create-account). You can generate more keys and manage the existing ones through the Infobip API key management page (https://portal.infobip.com/settings/accounts/api-keys).

About this method

Keys can be revoked at any time, which is useful when separating API access rights across multiple applications or use cases.

Lost API keys are easily retrievable

Infobip API keys have a predefined expiry date to eventually become invalid

The API key is added to the header with a prefix of App. For example:

'Authorization: App api_key'

IBSSO Token Header

IBSSO tokens are session-based, so the tokens are valid for only a short time. Although this makes the method more secure, it requires more maintenance to keep the authentication valid.

Typically, this kind of authentication is used in single sign-on scenarios with multiple sign-ins, which should be avoided across the system.

About this method

All API requests are authenticated with a session token (https://www.infobip.com/docs/api#platform-connectivity/account-management/create-session).

By default, IBSSO tokens will expire after 60 minutes. After the token expires, you must create a new token.

If you want to create a new token but the previous one hasn't yet expired, first, you need to end the session (https://www.infobip.com/docs/api#platform-connectivity/account-management/destroy-session).

You can shorten the session length with a dedicated API call (https://www.infobip.com/docs/api#platform-connectivity/account-management/destroy-session).

How to use IBSSO tokens

Make a call to create a session endpoint and take the token from the response.

Include "IBSSO" and the token in the Authorization header for all subsequent calls, for example:

'Authorization: IBSSO IBSSO_token'

Optionally, you can end the session to adjust the session length to your needs. By default, the session will expire after 60 minutes.

OAuth 2.0

This type of authentication is the most secure option and is almost industry standard. Similarly to IBSSO tokens, you'll use an access token you get from a separate endpoint (https://www.infobip.com/docs/api/platform/account-management/create-oauth2-token).

About this method

The access token returned in the response will expire within the time limit (in seconds) that you provided in that response. Infobip acts as both a resource and an authorization server.

You need to create a new token once the token expires. Note that there is no automatic token retrieval.

How to use OAuth 2.0

To use OAuth 2.0, make a call to get the access token and the expiration time from a separate endpoint (https://www.infobip.com/docs/api/platform/account-management/create-oauth2-token).

Include "Bearer " and the token in the Authorization header for all subsequent calls until the token expires:

'Authorization: Bearer oauth_token'

To learn more about Oauth authentication, see the Infobip APIs authentication documentation (https://www.infobip.com/docs/essentials/api-authentication).


#### About People
Infobip stores all your customer information in one place and activates it within the Infobip products and solutions that you are using. It continuously “supplies” relevant information needed for your behavior-based interaction with customers. For Conversations, that happens via the contact centers or chatbots, which help you to build a meaningful customer journey.

To learn more about People, see the People documentation (https://www.infobip.com/docs/people).

#### Integration with People
With People, you can build rich profiles for each person to create audience segments for more precise targeting. You can manage duplicates and import your data over API.

Events reflect actions that end-users take on your website or in your mobile application.

Events API is a robust way to send those events to Infobip. Event can be sent only to an existing person in Target module and an event definition should be created beforehand to describe contents of the event.

Besides using an HTTP client to do the requests, you can use one of the SDKs to track the events. For more information regarding these SDKs, see the Customer Engagement People SDK documentation (https://www.infobip.com/docs/api/customer-engagement/people).

#### Using HTTP client
There are many endpoints with which you can integrate an application with People. There are six endpoint categories:

Person profile

Company profile

Tags

Custom attributes

Contact Information: Push

Events

To learn more about these endpoints, see the Customer Engagement People SDK documentation (https://www.infobip.com/docs/api/customer-engagement/people), and log in.

#### cURL examples
To see your API Key and the Base URL for the endpoints, go to each endpoint page or to https://www.infobip.com/docs/api and log in with your account.

To get a list of people (https://www.infobip.com/docs/api/customer-engagement/people/get-a-single-person-or-a-list-of-people).

```sh
curl -L -g -X GET 'https://{baseUrl}/people/2/persons' \
-H 'Authorization: {authorization}' \
-H 'Accept: application/json'
```

To get a person by email (https://www.infobip.com/docs/api/customer-engagement/people/get-a-single-person-or-a-list-of-people).

```sh
curl -L -g -X GET 'https://{baseUrl}/people/2/persons?email=janewilliams@acme.com' \
-H 'Authorization: {authorization}' \
-H 'Accept: application/json'
```

To create a new person (https://www.infobip.com/docs/api/customer-engagement/people/create-a-new-person).

```sh
curl -L -g -X POST 'https://{baseUrl}/people/2/persons' \
-H 'Authorization: {authorization}' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
--data-raw '{
  "firstName": "Jane",
  "lastName": "Smith",
  "contactInformation": {
    "email": [
      {
        "address": "janewilliams@acme.com"
      }
    ]
  }
}
```

#### Code snippet in Javascript
To create a new person profile, if it does not already exist, using two of the endpoints mentioned above (get a person by email and create a new person) and API Key as authentication.
**Create a new person profile if it does not already exist**

```js
const savePerson = async () => {

    const response = await fetch(
        `https://{baseUrl}/people/2/persons?email=${newReservation.host_email}`,
        {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Authorization': `App {apiKey}`
            },
        });
    const status = await response.status;
    if (response && status === 200) {
        console.log('Person already exists!')
    } else {
        createPerson().then(() => {
            console.log('Person created!')
        }).catch(error => {
            console.log('Error creating the person!')
        })
    }
};

const createPerson = async () => {
    const newPerson = {
        "firstName": "Jane Smith",
        "contactInformation": {
            "email": [
                {
                    "address": "jane_smith@acme.com"
                }
            ]
        }
    };

    const result = await fetch(
        `https://{baseUrl}/people/2/persons`,
        {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `App ${apiKey}`
            },
            body: JSON.stringify(newPerson),
        });
    const createPersonResponse = await result.json().catch((error) => {
        return error;
    });
    return createPersonResponse;
};
```
