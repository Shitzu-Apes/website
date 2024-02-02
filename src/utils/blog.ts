import { z } from "zod";

export const BlogMetadata = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  date: z.string(),
  author: z.string(),
  tags: z.array(z.string()),
});

export type TBlogMetadata = z.infer<typeof BlogMetadata>;
