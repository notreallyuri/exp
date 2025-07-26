import { router } from "../instance";
import { userRouter } from "./user";

export const appRouter = router({
  user: userRouter,
});
