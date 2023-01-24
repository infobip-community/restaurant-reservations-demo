import express from "express";
import * as path from "express";
const __dirname = dirname(fileURLToPath(import.meta.url));
import {
  createConnection,
  deleteReservation,
  updateReservation,
  getAllReservations,
  addReservation,
  getByEmail,
  getConfigFields,
  addConfigFields,
  getAdditionalFields,
  deleteConfigField
} from "./database.js";

const port = process.env.PORT || 3001;
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
createConnection();

app.use(express.json()); // to support JSON-encoded bodies

app.get("/exchange/restaurant/reservations/:email", async (req, res) => {
  const reservation = await getByEmail(req.params.email).catch((error) => {
    return res.status(500).json({ error });
  });
  return res.json(reservation);
});

app.get("/exchange/restaurant/reservations", async (req, res) => {
  return res.json({ reservations: await getAllReservations() });
});

app.post("/exchange/restaurant/reservations", async (req, res) => {
  const reservation = await addReservation(req.body).catch((error) => {
    return res.status(500).json({ error });
  });
  return res.json(reservation);
});

app.delete("/exchange/restaurant/reservations/:id", (req, res) => {
  res.json(deleteReservation(req.params.id));
});

app.put("/exchange/restaurant/reservations/:id", (req, res) => {
  res.json(updateReservation(req.params.id, req.body));
});

app.get("/exchange/restaurant/config", async (req, res) => {
  return res.json({ config: await getConfigFields() });
});

app.post("/exchange/restaurant/config", async (req, res) => {
  const reservation = await addConfigFields(req.body).catch((error) => {
    return res.status(500).json({ error });
  });
  return res.json(reservation);
});

app.get("/exchange/restaurant/config/additionalFields", async (req, res) => {
  return res.json({ config: await getAdditionalFields() });
});

app.post("/exchange/restaurant/config/additionalFields", async (req, res) => {
  return res.json({ config: await deleteConfigField(req.body) });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});