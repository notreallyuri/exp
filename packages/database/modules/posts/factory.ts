import { db } from "../../instance";
import { PostRepository } from "./repository";
import {
  CreatePost,
  DeletePost,
  GetPostById,
  GetPostsByAuthorId,
  UpdatePost,
} from "./services";

function PostFactory<T>(Service: new (repository: PostRepository) => T) {
  const repository = new PostRepository(db);
  return new Service(repository);
}

const updatePost = PostFactory(UpdatePost);
const createPost = PostFactory(CreatePost);
const deletePost = PostFactory(DeletePost);
const getPostsByAuthorId = PostFactory(GetPostsByAuthorId);
const getPostById = PostFactory(GetPostById);

const postActions = {
  updatePost,
  createPost,
  deletePost,
  getPostById,
  getPostsByAuthorId,
};

export { postActions };
