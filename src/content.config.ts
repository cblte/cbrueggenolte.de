import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    category: z.string(),
    description: z.string().optional(),
    cover: z.string().optional(),
  }),
});

export const collections = {
  posts: posts,
};
