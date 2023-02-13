import type { CollectionEntry } from "astro:content";

export const getTags = (recipes: CollectionEntry<"recipes">[]) => [
  ...new Set(recipes.flatMap((recipe) => recipe.data.tags).sort()),
];
