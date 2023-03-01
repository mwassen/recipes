import type { CollectionEntry } from "astro:content";

export const getTags = (recipes: CollectionEntry<"recipes">[]) =>
  [...new Set(recipes.flatMap((recipe) => recipe.data.tags))].sort();

export const getTagsWithFrequency = (recipes: CollectionEntry<"recipes">[]) =>
  getTags(recipes)
    .map((o) => ({
      name: o,
      frequency: recipes.filter((r) => r.data.tags.includes(o)).length,
    }))
    .sort((a, b) => b.frequency - a.frequency);
