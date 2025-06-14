import {MongoClient} from 'mongodb';
import 'dotenv/config.js';

let db;
let dbName = 'library';

const url = process.env.MONGODB_URI; // Use your MongoDB connection string
//console.log(process.env);
const client = new MongoClient(url);

async function main() {  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    db = await client.db(dbName);
    //console.log(db);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

function getDb() {
  if (!db) {
    throw new Error('Database not initialized');
  }
  return db;
}

export {getDb}

export default main;