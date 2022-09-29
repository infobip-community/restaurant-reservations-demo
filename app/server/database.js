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
    db.data = { meetings: [] };
    await db.write();
  }
};

export const getAllMeetings = () => {
  db.chain = lodash.chain(db.data);
  return db.data.meetings;
};

export const addMeeting = async (meeting) => {
  db.chain = lodash.chain(db.data);
  const meetingList = db.chain.get("meetings");
  meetingList
    .chain()
    .push({ ...meeting, id: uuidv4() })
    .value();
  await db.write();

  return meetingList;
};

export const updateMeeting = async (meetingUpdated) => {
  db.chain = lodash.chain(db.data);
  const meeting = db.chain.get("meetings");
  meeting.chain().find({ id: meetingUpdated.id }).assign(meetingUpdated).value();
  await db.write();
};

export const deleteMeeting = async (meetingDeleted) => {
  db.chain = lodash.chain(db.data);
  db.chain.get("meetings").remove({ id: meetingDeleted.id }).value();

  await db.write();
};

export const getByDate = async (timeFrame) => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  db.chain = lodash.chain(db.data);

  if (timeFrame === "TODAY") {
    const meeting = await db.chain
      .get("meetings")
      .filter({ date: `${month}/${day}/${year}` })
      .value();
    return meeting ? meeting : [];
  }
  if (timeFrame === "TOMORROW") {
    const meeting = await db.chain
      .get("meetings")
      .filter({ date: `${month}/${day + 1}/${year}` })
      .value();
    return meeting ? meeting : [];
  }
  return getAllMeetings();
};
