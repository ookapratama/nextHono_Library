import { mysqlTable, serial, varchar, timestamp, text, char, int } from "drizzle-orm/mysql-core";
import { kategori } from "./kategori";

export const books = mysqlTable("books", {
  id: int("id").primaryKey().autoincrement(),
  file: varchar("file", "255").notNull(),
  judul: varchar("judul", "255").notNull(),
  deskripsi: text('deskripsi').notNull(),
  penerbit: varchar('penerbit', '255').notNull(),
  pengarang: varchar('pengarang', '255').notNull(),
  pengarang1: varchar('pengarang1', '255').notNull(),
  tahun: char('tahun', '4').notNull(),
  kategori_id: int('kategori_id').references(() => kategori.id, {onUpdate: 'cascade', onDelete: 'no action'}).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow().defaultNow(),
});
