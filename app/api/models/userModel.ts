import { InferSelectModel } from "drizzle-orm";
import { users } from "../src/db/schema";

export type User = InferSelectModel<typeof users>
export type NewUser = Omit<User, 'id' | 'createdAt' | 'updatedAt'>
export type UpdateUser = Partial<NewUser>


