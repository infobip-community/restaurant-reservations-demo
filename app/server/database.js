import { Low, JSONFile } from "lowdb";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import lodash from 'lodash';

let db;


const __dirname = dirname(fileURLToPath(import.meta.url));

export const  createConnection =  async () => {
    // Use JSON file for storage
    const file = join(__dirname, "../db.json");
    const adapter = new JSONFile(file);
    db = new Low(adapter);

    // Read data from JSON file, this will set db.data content
    await db.read();
    const mockData  = {meetings:[{ id: "1", title: 'Sprint Review', room: 'Amigo Room', description: 'Review last sprint', start_datetime : randomDate(), end_datetime: randomDate(), host: 'Amigo', guest: ['Amigo1', 'Amigo2'], status: 'Active' },
            { id: "2", title: 'Grooming', room: 'Guadalajara Room', description: 'Review', start_datetime : randomDate(), end_datetime: randomDate(), host: 'Amigo', guest: ['Amigo1', 'Amigo2'], status: 'Active' },
            { id: "3", title: 'Retrospective', room: 'Mexico Room', description: 'Review test', start_datetime : randomDate(), end_datetime: randomDate(), host: 'Amigo', guest: ['Amigo1', 'Amigo2'], status: 'Active' }]
    }

    db.data ||= mockData;
    // Write db.data content to db.json
    await db.write();
}

export const getAllMeetings = ()=>{
    return db.data.meetings;
}

export const findMeetingById = (id)=>{
    db.chain = lodash.chain(db.data);
    const meeting = db.chain
        .get('meetings')
        .find({ id: id })
        .value();
    return [meeting];
}

const  randomDate = () => {
    return new Date(new Date(2012, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2012, 0, 1).getTime()));
}

