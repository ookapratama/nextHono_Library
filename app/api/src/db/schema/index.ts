import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'

export * from "./books"
export * from "./kategori"
export * from "./logbook"
export * from "./user"


const  connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

export const db = drizzle(connection)