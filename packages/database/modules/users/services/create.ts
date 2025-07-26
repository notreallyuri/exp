import type { User } from "@acme/models";
import type { Service } from "../../../interfaces";
import type { UserRepository } from "../repository";

export class CreateUser
  implements Service<UserRepository, User, { id: string }>
{
  repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async execute(userData: User): Promise<{ id: string }> {
    const user = await this.repository.createUser(userData);
    return { id: user.id };
  }
}
