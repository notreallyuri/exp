import type { Service } from "../../../interfaces";
import type { PostRepository } from "../repository";

export class DeletePost implements Service<PostRepository, string, void> {
  repository: PostRepository;

  constructor(repository: PostRepository) {
    this.repository = repository;
  }

  async execute(id: string): Promise<void> {
    await this.repository.deletePost(id);
  }
}
