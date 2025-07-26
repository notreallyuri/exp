import { pgTable, text, date } from "drizzle-orm/pg-core";
import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1).max(100),
  password: z.string().min(8).max(100),
  email: z.email(),
});

export const userTable = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  createdAt: date("created_at").defaultNow(),
  updatedAt: date("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date().toISOString()),
});

export type User = z.infer<typeof userSchema>;
export type UserTable = typeof userTable.$inferSelect;
