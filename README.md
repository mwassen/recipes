# Marcus' recipes

A recipe website without the bloat. Inspired by [Based Cooking](https://based.cooking/) but made with a different set of tools, mainly [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

```bash
# Install
pnpm install

# Run
pnpm run dev

# Build
pnpm run build
```

## Recipe formatting

All recipes need to contain the following values in their frontmatter:

```md
---
title: string
tags: string[]
date: Date
---
```
