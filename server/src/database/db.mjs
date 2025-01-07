import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();
const host = process.env.HOST;
const user = process.env.USER;
const database = process.env.DATABASE;
const password = process.env.PASSWORD;

// create the pool connection to database
const pool = mysql.createPool({
  host: host,
  user: user,
  database: database,
  password: password
});

export default pool;
