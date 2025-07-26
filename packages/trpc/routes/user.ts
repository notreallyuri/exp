import { z } from "zod";
import { userActions } from "../../database";
import { userSchema } from "../../models";
import { procedure, router } from "../instance";

export const userRouter = router({
  createUser: procedure.input(userSchema).mutation(async ({ input }) => {
    return await userActions.createUser.execute(input);
  }),

  updateUser: procedure
    .input(
      z.object({
        id: z.string(),
        userData: userSchema.partial(),
      })
    )
    .mutation(async ({ input }) => {
      const { id, userData } = input;

      return await userActions.updateUser.execute({ id, userData });
    }),

  listUsers: procedure.query(async () => {
    return await userActions.getAllUsers.execute();
  }),

  getUserById: procedure.input(z.string()).query(async ({ input }) => {
    return await userActions.getUserById.execute(input);
  }),

  deleteUser: procedure.input(z.string()).mutation(async ({ input }) => {
    return await userActions.deleteUser.execute(input);
  }),
});
