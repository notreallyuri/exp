import { z } from "zod";

export const commentSchemas = z.object({
  content: z.string().min(1).max(1000),
});

export type Comment = z.infer<typeof commentSchemas>;
