import type { User } from "@acme/models";
import { eq } from "drizzle-orm";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import { userTable } from "./schema";

export class UserRepository {
  private db: NodePgDatabase;

  constructor(db: NodePgDatabase) {
    this.db = db;
  }

  async createUser(userData: User) {
    const data = await this.db
      .insert(userTable)
      .values(userData)
      .returning({ id: userTable.id })
      .then((r) => r[0]);

    return data;
  }

  async getAllUsers() {
    const users = await this.db.select().from(userTable);

    return users;
  }

  async getUserById(id: string) {
    const user = await this.db
      .select()
      .from(userTable)
      .where(eq(userTable.id, id))
      .then((r) => r[0]);

    return user;
  }

  async updateUser(id: string, userData: Partial<User>) {
    const user = await this.db
      .update(userTable)
      .set(userData)
      .where(eq(userTable.id, id))
      .returning({ id: userTable.id })
      .then((r) => r[0]);

    return user;
  }

  async deleteUser(id: string) {
    const user = await this.db
      .delete(userTable)
      .where(eq(userTable.id, id))
      .returning({ id: userTable.id })
      .then((r) => r[0]);

    return user;
  }
}
