import type { Post } from "@acme/models";
import type { Service } from "../../../interfaces";
import type { PostRepository } from "../repository";

export class GetPostById
  implements Service<PostRepository, string, Post | null>
{
  repository: PostRepository;

  constructor(repository: PostRepository) {
    this.repository = repository;
  }

  async execute(id: string): Promise<Post | null> {
    const post = await this.repository.getPostById(id);
    return post;
  }
}

export class GetPostsByAuthorId
  implements Service<PostRepository, string, Post[]>
{
  repository: PostRepository;

  constructor(repository: PostRepository) {
    this.repository = repository;
  }

  async execute(authorId: string): Promise<Post[]> {
    const posts = await this.repository.getPostByAuthorId(authorId);
    return posts;
  }
}
