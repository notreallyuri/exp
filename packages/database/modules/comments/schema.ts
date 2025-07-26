import { date, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { postTable } from "../posts/schema";
import { userTable } from "../users/schema";

const commentTable = pgTable("comment", {
  id: uuid("id").defaultRandom().primaryKey(),
  content: text("content").notNull(),
  postId: uuid("post_id")
    .references(() => postTable.id)
    .notNull(),
  authorId: uuid("author_id")
    .references(() => userTable.id)
    .notNull(),
  createdAt: date("created_at").defaultNow(),
  updatedAt: date("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date().toISOString()),
});

type CommentTable = typeof commentTable.$inferSelect;

export { commentTable, type CommentTable };
