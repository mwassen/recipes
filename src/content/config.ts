import { defineCollection, z } from "astro:content";
const recipesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    date: z.date().transform((d) => new Date(d)),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  recipes: recipesCollection,
};
