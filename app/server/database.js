import { Low, JSONFile } from "lowdb";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import lodash from "lodash";

let db;
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "../db.json");
const adapter = new JSONFile(file);
db = new Low(adapter);
db.read();

export const createConnection = async () => {
  // Use JSON file for storage
  // Read data from JSON file, this will set db.data content
  if (db.data === null) {
    db.data = { reservations: [] };
    await db.write();
  }
};

export const getAllReservations = () => {
  db.chain = lodash.chain(db.data);
  return db.data.reservations;
};

export const addReservation = async (reservation) => {
  return new Promise(async (resolve, reject) => {
    const reservationWithId = { ...reservation, id: uuidv4() };
    db.chain = lodash.chain(db.data);
    const existingReservation = db.chain
      .get("reservations")
      .find({ host_email: reservation.host_email })
      .value();
    if (!existingReservation) {
      db.chain.get("reservations").chain().push(reservationWithId).value();
      await db.write();
      resolve(reservationWithId);
    } else {
      reject(
        "You have an existing reservation, please delete it before creating a new one or update existing one."
      );
    }
  });
};

export const updateReservation = async (meetingUpdated) => {
  db.chain = lodash.chain(db.data);
  const Reservation = db.chain.get("reservations");
  Reservation.chain()
    .find({ host_name: meetingUpdated.host_name })
    .assign(meetingUpdated)
    .value();
  await db.write();
};

export const deleteReservation = async (meetingDeleted) => {
  db.chain = lodash.chain(db.data);
  db.chain
    .get("reservations")
    .remove({ host_name: meetingDeleted.host_name })
    .value();

  await db.write();
};

export const getByDate = async (timeFrame) => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  db.chain = lodash.chain(db.data);

  if (timeFrame === "TODAY") {
    const Reservation = await db.chain
      .get("reservations")
      .filter({ date: `${month}/${day}/${year}` })
      .value();
    return Reservation ? meeting : [];
  }
  if (timeFrame === "TOMORROW") {
    const Reservation = await db.chain
      .get("reservations")
      .filter({ date: `${month}/${day + 1}/${year}` })
      .value();
    return Reservation ? meeting : [];
  }
  return getAllReservations();
};
