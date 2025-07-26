import type { Service } from "../../../interfaces";
import type { UserRepository } from "../repository";

export class DeleteUser
  implements Service<UserRepository, string, { id: string } | null>
{
  repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async execute(id: string): Promise<{ id: string } | null> {
    const user = await this.repository.deleteUser(id);
    return user || null;
  }
}
