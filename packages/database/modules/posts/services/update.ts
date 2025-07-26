import type { Post } from "@acme/models";
import type { Service } from "../../../interfaces";
import type { PostRepository } from "../repository";

export class UpdatePost
  implements Service<PostRepository, { id: string; data: Partial<Post> }, void>
{
  repository: PostRepository;

  constructor(repository: PostRepository) {
    this.repository = repository;
  }

  async execute(input: { id: string; data: Partial<Post> }): Promise<void> {
    await this.repository.updatePost(input.id, input.data);
  }
}
