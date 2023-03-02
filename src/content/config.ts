import { defineCollection, z } from "astro:content";
const recipesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    date: z.date().transform((d) => new Date(d)),
  }),
});

export const collections = {
  recipes: recipesCollection,
};
