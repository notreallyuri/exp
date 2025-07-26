import { date, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { userTable } from "../users/schema";

const postTable = pgTable("post", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  authorId: uuid("author_id")
    .references(() => userTable.id)
    .notNull(),
  createdAt: date("created_at").defaultNow(),
  updatedAt: date("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date().toISOString()),
});

type PostTable = typeof postTable.$inferSelect;

export { postTable, type PostTable };
