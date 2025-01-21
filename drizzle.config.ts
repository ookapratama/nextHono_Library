import type { Config } from 'drizzle-kit';

export default {
  schema: './app/api/src/db/schema/*',
  out: './app/api/src/db/migrations',
  dialect: 'mysql',
  dbCredentials: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
}