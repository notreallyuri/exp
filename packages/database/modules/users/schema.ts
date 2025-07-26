import { date, pgTable, text, uuid } from "drizzle-orm/pg-core";

const userTable = pgTable("user", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  createdAt: date("created_at").defaultNow(),
  updatedAt: date("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date().toISOString()),
});

type UserTable = typeof userTable.$inferSelect;

export { userTable, type UserTable };
