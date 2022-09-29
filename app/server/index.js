import express from 'express';
import { createConnection,getAllMeetings,findMeetingById } from "./database.js";


// Create and query items using plain JS
const PORT = 3001;
const app = express()

app.get("/exchange/agenda-demo/getMeetings/today",  (req, res) => {
  res.json(findMeetingById('1'));
});

app.get("/exchange/agenda-demo/getMeetings/all",  (req, res) => {
  res.json(getAllMeetings());
});

app.get("/exchange/agenda-demo/getMeetings/tomorrow", (req, res) => {
  res.json(findMeetingById('2'));
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

createConnection();
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
