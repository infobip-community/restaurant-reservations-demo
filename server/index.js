import express from "express";
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
  deleteConfigField,
} from "./database.js";
import path from "path";
const __dirname = path.resolve();

const port = process.env.PORT || 3001;
const app = express();

createConnection();

app.use(express.json()); // to support JSON-encoded bodies

//API ROUTES
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

// FRONT END APP

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
