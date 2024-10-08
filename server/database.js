import { JSONFilePreset } from "lowdb/node";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import lodash from "lodash";

const defaultData = {
  reservations: [],
  config: {
    fields: [
      {
        id: 1,
        name: "Date",
        placeHolder: "Date",
        required: true,
        additional: false

      },
      {
        id: 2,
        name: "Hour",
        placeHolder: "Hour",
        required: true,
        additional: false

      },
      {
        id: 3,
        name: "Host Name",
        placeHolder: "Host Name",
        required: true,
        additional: false

      },
      {
        id: 4,
        name: "Host Email",
        placeHolder: "Host Email",
        required: true,
        additional: false

      },
      {
        id: 5,
        name: "Host Phone Number",
        placeHolder: "Host Phone Number",
        required: true,
        additional: false
      }
    ],
  },
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "../db.json");
const db = await JSONFilePreset(file, defaultData);

export const getAllReservations = () => {
  db.chain = lodash.chain(db.data);
  return db.data.reservations;
};

export const getByEmail = (host_email) => {
  db.chain = lodash.chain(db.data);
  return new Promise(async (resolve, reject) => {
    const reservation = db.chain
      .get("reservations")
      .find({ host_email })
      .value();
    if (reservation) {
      resolve(reservation);
    }
    const host_phone_number = host_email;
    const reservationPhoneNumber = db.chain
      .get("reservations")
      .find({ host_phone_number })
      .value();
    if (reservationPhoneNumber) {
      resolve(reservationPhoneNumber);
    } else {
      reject(`No reservation found for: ${host_email}`);
    }
  });
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

export const updateReservation = async (id, reservationUpdated) => {
  db.chain = lodash.chain(db.data);
  const Reservation = db.chain.get("reservations");
  Reservation.chain().find({ id }).assign(reservationUpdated).value();
  await db.write();
};

export const deleteReservation = async (id) => {
  db.chain = lodash.chain(db.data);
  db.chain.get("reservations").remove({ id }).value();
  await db.write();
};

export const getConfigFields = async () => {
  db.chain = lodash.chain(db.data);
  return db.chain.get("config");
};

export const addConfigFields = async (fields) => {
  db.chain.get("config").get("fields").chain().assign(fields).value();
  await db.write();
};

export const getAdditionalFields = async () => {
  db.chain = lodash.chain(db.data);
  const configFields = db.chain.get("config").get("fields");
  const filterFields = configFields
    .chain()
    .filter((field) => field.additional)
    .value();
  await db.write();
  return filterFields;
};

export const deleteConfigField = async (request) => {
  db.chain = lodash.chain(db.data);
  db.chain.get("config").get("fields").remove({ name: request.name }).value();
  await db.write();
};
