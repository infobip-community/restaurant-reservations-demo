import express from 'express';
import { createConnection, getByDate, updateMeeting, deleteMeeting, addMeeting } from "./database.js";

const PORT = process.env.PORT || 3001;
const app = express()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
createConnection();

app.use(express.json());       // to support JSON-encoded bodies
app.post("/exchange/agenda-demo/meetings", async (req, res) => {
  return res.json({meetings: await addMeeting(req.body)});
});

app.get("/exchange/agenda-demo/meetings",  async (req, res) => {
  return res.json({meetings: await getByDate(req.query.timeframe)});
});

app.delete("/exchange/agenda-demo/meetings",  (req, res) => {
  res.json(deleteMeeting(req.body));
});

app.put("/exchange/agenda-demo/meetings",  (req, res) => {
  res.json(updateMeeting(req.body));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
