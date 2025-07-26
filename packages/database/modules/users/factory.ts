import { db } from "../../instance";
import { UserRepository } from "./repository";
import {
  CreateUser,
  DeleteUser,
  GetAllUsers,
  GetUserById,
  UpdateUser,
} from "./services";

function UserFactory<T>(Service: new (repository: UserRepository) => T) {
  const repository = new UserRepository(db);
  return new Service(repository);
}

const updateUser = UserFactory(UpdateUser);
const createUser = UserFactory(CreateUser);
const deleteUser = UserFactory(DeleteUser);
const getUserById = UserFactory(GetUserById);
const getAllUsers = UserFactory(GetAllUsers);

const userActions = {
  updateUser,
  createUser,
  deleteUser,
  getUserById,
  getAllUsers,
};

export { userActions };
