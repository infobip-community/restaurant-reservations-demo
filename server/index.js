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
  deleteConfigField
} from "./database.js";
import path from "path"
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

// // FRONT END APP
// app.use(function (req, res, next) {
//   res.setHeader(
//     'Content-Security-Policy-Report-Only',
//     "default-src 'self' data: ws: wss: blob: *.ioinfobip.com *.infobip.com d2ygi9hnn4h2ig.cloudfront.net d24n15hnbwhuhn.cloudfront.net d272uv7x5ewxfm.cloudfront.net d3131dgcggnrk5.cloudfront.net dxaf42r9w3qhj.cloudfront.net d1344zagihobu2.cloudfront.net netdna.bootstrapcdn.com maxcdn.bootstrapcdn.com cdnjs.cloudflare.com www.gravatar.com cdn.polyfill.io maps.googleapis.com fonts.googleapis.com fonts.gstatic.com www.gstatic.com www.googleoptimize.com www.recaptcha.net script.crazyegg.com scripts.kissmetrics.com stats.g.doubleclick.net trk.kissmetrics.com https://*.zopim.com wss://*.zopim.com https://v2assets.zopim.io https://v2uploads.zopim.io *.zdassets.com *.zendesk.com s3.eu-central-1.amazonaws.com *.amplitude.com *.aptrinsic.com *.fullstory.com *.mouseflow.com *.smartlook.com nominatim.openstreetmap.org *.youtube.com *.youtu.be *.vimeo.com *.gooddata.com consent.cookiebot.com js-agent.newrelic.com *.ingest.sentry.io")
//   next();
// });

// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'self'"],
//       scriptSrc: ["'self'", "example.com"],
//       objectSrc: ["'none'"],
//       upgradeInsecureRequests: [],
//     },
//   })
// );

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname ,'client/build','index.html'))
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});