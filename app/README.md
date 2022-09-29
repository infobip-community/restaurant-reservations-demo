# Agenda demo
This app will help you to create an end-to-end integration between this app and the Infobip Products using Exchange.

Using NodeJS and React.

---

# 📦 Installation
Clone repository from 
`git@github.com:infobip-community/infobip-exchange-agenda-demo.git`

Install dependencies
```bash
cd infobip-exchange-agenda-demo && npm i
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

#### *Get all meetings 
##### URL: `/exchange/agenda-demo/meetings?timeframe=today`
##### Method: `Get`
##### Query Params: `{timeframe: "TODAY" | "TOMORROW"}`
##### Payload: NA
##### Response:
```json
{
   "meetings":[
      {
         "id":"71f9e656-e94b-45c8-a840-a4cddc983572",
         "title":"Sprint Review",
         "room":"Infobip room",
         "description":"To review sprints",
         "start_time":"14:14",
         "end_time":"14:14",
         "date":"9/26/2022",
         "host":"Victoria Kanto",
         "guest":"Infobip Team"
      },
      {
         "id":"71f9e656-e94b-45c8-a840-a4cddc4350983",
         "title":"Retrospective",
         "room":"Guadalajara room",
         "description":"To review sprint",
         "start_time":"18:00",
         "end_time":"19:00",
         "date":"9/26/2022",
         "host":"Francisco Zork",
         "guest":"Infobip Team"
      }
   ]
}
``` 

#### *Create a meeting
##### URL: `/exchange/agenda-demo/meetings`
##### Method: `POST`
##### Payload: 
```json
{
   "id":"3043f8cb-b537-460f-a08e-1576eba052b6",
   "date":"9/26/2022",
   "description":"To review sprints",
   "end_time":"14:14",
   "guest":"InfobipTeam",
   "host":"Infobip",
   "room":"Infobip room",
   "start_time":"14:14",
   "title":"Sprint Review"
}
```

##### Response:
```json
{
   "id":"71f9e656-e94b-45c8-a840-a4cddc983572",
   "title":"Sprint Review",
   "room":"Infobip room",
   "description":"To review sprints",
   "start_time":"14:14",
   "end_time":"14:14",
   "date":"9/26/2022",
   "host":"Infobip",
   "guest":"Infobip Team"
}
```
#### *Update a meeting

##### URL: `/exchange/agenda-demo/meetings`
##### Method: `PUT`
##### Payload: 
```json
{
   "id":"3043f8cb-b537-460f-a08e-1576eba052b6",
   "date":"9/26/2022",
   "description":"To review sprints Updated",
   "end_time":"14:14",
   "guest":"InfobipTeam",
   "host":"Infobip",
   "room":"Infobip room",
   "start_time":"14:14",
   "title":"Sprint Review"
}
```
##### Response:
```json
{
   "id":"71f9e656-e94b-45c8-a840-a4cddc983572",
   "title":"Sprint Review",
   "room":"Infobip room",
   "description":"To review sprints Updated",
   "start_time":"14:14",
   "end_time":"14:14",
   "date":"9/26/2022",
   "host":"Infobip",
   "guest":"Infobip Team"
}
```

#### *Delete a meeting

##### URL: `/exchange/agenda-demo/meetings`
##### Method: `DELETE`
##### Payload: 
```json
{
   "id":"3043f8cb-b537-460f-a08e-1576eba052b6",
   "date":"9/26/2022",
   "description":"To review sprints",
   "end_time":"14:14",
   "guest":"InfobipTeam",
   "host":"Infobip",
   "room":"Infobip room",
   "start_time":"14:14",
   "title":"Sprint Review"
}
```

---

## ⚖️ License

This library is distributed under the MIT license found in the [License](LICENSE).
