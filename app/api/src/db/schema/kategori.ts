import { mysqlTable, serial, varchar, timestamp, int } from "drizzle-orm/mysql-core";

export const kategori = mysqlTable("kategori", {
  id: int("id").primaryKey().autoincrement(),
  nama: varchar("nama", "255").notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow().defaultNow(),
});
