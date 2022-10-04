import express from "express";
import {
  createConnection,
  deleteReservation,
  updateReservation,
  getAllReservations,
  addReservation,
} from "./database.js";

const PORT = process.env.PORT || 3001;
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
createConnection();

app.use(express.json()); // to support JSON-encoded bodies
app.post("/exchange/restaurant/reservations", async (req, res) => {
  const reservation = await addReservation(req.body).catch((error) => {
    return res.status(500).json({ error });
  });
  return res.json(reservation);
});
app.get("/exchange/restaurant/reservations/:email", async (req, res) => {
  return res.json({ reservations: await getAllReservations() });
});

app.get("/exchange/restaurant/reservations", async (req, res) => {
  return res.json({ reservations: await getAllReservations() });
});

app.delete("/exchange/restaurant/reservations", (req, res) => {
  res.json(deleteReservation(req.body));
});

app.put("/exchange/restaurant/reservations", (req, res) => {
  res.json(updateReservation(req.body));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
