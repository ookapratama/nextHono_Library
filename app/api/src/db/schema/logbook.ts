import {
  mysqlTable,
  serial,
  varchar,
  timestamp,
  int,
} from "drizzle-orm/mysql-core";
import { users } from "./user";
import { books } from "./books";

export const logbook = mysqlTable("logbook", {
  id: serial("id").primaryKey(),
  userId: int("user_id").references(() => users.id, {onUpdate: 'cascade', onDelete: 'no action'}).notNull(),
  bookId: int("book_id").references(() => books.id, {onUpdate: 'cascade', onDelete: 'no action'}).notNull(),
  action: varchar("action", "255").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").onUpdateNow().defaultNow(),

});

