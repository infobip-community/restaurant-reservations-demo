# Restaurant demo
This app will help you to create an end-to-end integration between this app and the Infobip Products using Exchange.

Using NodeJS and React.

---

# 📦 Installation
Clone repository from 
`git@github.com:infobip-community/restaurant-reservations-demo.git`

Install dependencies
```bash
cd restaurant-reservations-demo && npm i
```

# 🚀 Usage
#### Requirements
Node Version: `14.17.5`
NPM: `8.0.0`

### Run application locally
```bash
npm run start:dev
```
App will be running at `http://localhost:3000`


# ⤴️ Deployment
To run on your host: 
```bash
npm run start
```

This will create front end build and expose front-end app and API

# 📚 API Documentation

#### *Get all reservations 
##### URL: `/exchange/restaurant/reservations`
##### Method: `Get`
##### Payload: NA
##### Response:
```json
{
   "reservations":[
      {
         "id" : "cd2b9987-09a4-4f4e-a426-b9c1cd30b60d",
         "date" : "10/28/2022",
         "host_email" : "John@doe.com",
         "host_name": : "John Doe",
         "hour" : "11:28",
      },
      {
         "id" : "0331d769-d964-4cf8-b517-7f77ba75e5e8",
         "date" : "10/28/2022",
         "host_email" : "Alice@Smith.com",
         "host_name": : "Alice Smith",
         "hour" : "11:28",
      }
   ]
}
``` 


#### *Get reservation by email
##### URL: `/exchange/restaurant/reservations/:email`
##### Method: `Get`
##### Params: `{email: "Alice@Smith.com"}`
##### Payload: NA
##### Response:
```json
{
   "id" : "0331d769-d964-4cf8-b517-7f77ba75e5e8",
   "date" : "10/28/2022",
   "host_email" : "Alice@Smith.com",
   "host_name": : "Alice Smith",
   "hour" : "11:28",
}
``` 

#### *Create a reservation
##### URL: `/exchange/restaurant/reservations`
##### Method: `POST`
##### Payload: 
```json
{
   "date" : "10/28/2022",
   "host_email" : "Alice@Smith.com",
   "host_name": : "Alice Smith",
   "hour" : "11:28",
}
```

##### Response:
```json
{
   "id" : "0331d769-d964-4cf8-b517-7f77ba75e5e8",
   "date" : "10/28/2022",
   "host_email" : "Alice@Smith.com",
   "host_name": : "Alice Smith",
   "hour" : "11:28",
}
```
#### *Update a meeting

##### URL: `/exchange/restaurant/reservations/:id`
##### Params: `{id: "0331d769-d964-4cf8-b517-7f77ba75e5e8"}`
##### Method: `PUT`
##### Payload: 
```json
{
   "date" : "10/28/2022",
   "host_email" : "Alice@Smith.com",
   "host_name": : "Alice Smith",
   "hour" : "09:00",
}
```
##### Response:
```json
{
   "id" : "0331d769-d964-4cf8-b517-7f77ba75e5e8",
   "date" : "10/28/2022",
   "host_email" : "Alice@Smith.com",
   "host_name": : "Alice Smith",
   "hour" : "09:00",
}
```

#### *Delete a meeting

##### URL: `/exchange/restaurant/reservations:id`
##### Params: `{id: "0331d769-d964-4cf8-b517-7f77ba75e5e8"}`
##### Method: `DELETE`
##### Payload: NA

---

## ⚖️ License

This library is distributed under the MIT license found in the [License](LICENSE).
