import type { Post } from "@acme/models";
import type { Service } from "../../../interfaces";
import type { PostRepository } from "../repository";

export class CreatePost
  implements
    Service<PostRepository, { authorId: string; data: Post }, { id: string }>
{
  repository: PostRepository;

  constructor(repository: PostRepository) {
    this.repository = repository;
  }

  async execute(input: {
    authorId: string;
    data: Post;
  }): Promise<{ id: string }> {
    const postId = await this.repository.createPost(input.authorId, input.data);
    return { id: postId };
  }
}
