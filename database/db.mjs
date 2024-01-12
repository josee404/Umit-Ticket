import mysql2 from 'mysql2/promise';
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER
} from '../config.js'

const DEFAULT_CONFIG = {
   host: DB_HOST,
   user: DB_USER,
   port: DB_PORT,
   password: DB_PASSWORD,
   database: DB_NAME
 }
 const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG

 export const db = await mysql2.createConnection(connectionString)