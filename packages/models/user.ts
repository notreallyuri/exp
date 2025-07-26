import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1).max(100),
  password: z.string().min(8).max(100),
  email: z.email(),
});

export type User = z.infer<typeof userSchema>;
