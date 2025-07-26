import type { User } from "@acme/models";
import type { Service } from "../../../interfaces";
import type { UserRepository } from "../repository";

export class GetUserById
  implements Service<UserRepository, string, User | null>
{
  repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async execute(id: string): Promise<User | null> {
    const user = await this.repository.getUserById(id);
    return user || null;
  }
}

export class GetAllUsers implements Service<UserRepository, void, User[]> {
  repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async execute(): Promise<User[]> {
    const users = await this.repository.getAllUsers();
    return users;
  }
}
