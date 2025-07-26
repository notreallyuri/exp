import { z } from "zod";

export const PostSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1).max(1000),
  authorId: z.uuid(),
});

export type Post = z.infer<typeof PostSchema>;