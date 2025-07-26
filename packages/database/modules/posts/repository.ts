import type { Post } from "@acme/models";
import { eq } from "drizzle-orm";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import { postTable } from "./schema";

export class PostRepository {
  private db: NodePgDatabase;

  constructor(db: NodePgDatabase) {
    this.db = db;
  }

  async createPost(authorId: string, postData: Post) {
    return await this.db
      .insert(postTable)
      .values({ ...postData, authorId })
      .returning({ id: postTable.id })
      .then((r) => r[0].id);
  }

  async getPostByAuthorId(authorId: string) {
    return await this.db
      .select()
      .from(postTable)
      .where(eq(postTable.authorId, authorId));
  }

  async getPostById(id: string) {
    return await this.db
      .select()
      .from(postTable)
      .where(eq(postTable.id, id))
      .then((r) => r[0]);
  }

  async updatePost(id: string, postData: Partial<Post>): Promise<void> {
    await this.db.update(postTable).set(postData).where(eq(postTable.id, id));
  }

  async deletePost(id: string): Promise<void> {
    await this.db.delete(postTable).where(eq(postTable.id, id));
  }
}
