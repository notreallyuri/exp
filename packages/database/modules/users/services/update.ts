import type { User } from "@acme/models";
import type { Service } from "../../../interfaces";
import type { UserRepository } from "../repository";

export class UpdateUser
  implements
    Service<
      UserRepository,
      { id: string; userData: Partial<User> },
      { id: string }
    >
{
  repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async execute({
    id,
    userData,
  }: {
    id: string;
    userData: Partial<User>;
  }): Promise<{ id: string }> {
    const user = await this.repository.updateUser(id, userData);
    return { id: user.id };
  }
}
