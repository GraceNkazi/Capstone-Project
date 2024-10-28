import {MongoClient} from 'mongodb';
import '../loadEnv.js';

const connectionString = process.env.MONGODB_URI || '';


// Mongodb client instance
const client = new MongoClient(connectionString);

// connection
let conn;

try {
    // tries to connect to the database
    conn = await client.connect();
} catch (e) {
    console.error('Error connecting to MongoDB', e);
}

// Selecting the db to use
const db = conn.db('sample_training');

export default db;