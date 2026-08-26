import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// ────────────────────────────────────────────────────────────────
// Schema maps 1:1 to the YAML keys emitted by n8n Part 4 · Node 6
// (part4_frontmatter_assembler.js). Keep these in lockstep — if a
// key is added there, add it here, or the build fails loudly (good).
// ────────────────────────────────────────────────────────────────
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().max(80),              // relaxed from 60 to handle long AI titles
    description: z.string().min(10).default(''), // allow short or missing descriptions
    pubDate: z.coerce.date(),
    author: z.string().default("The NeuroPulse Team"),
    authorId: z.string().default("ethan-cole"),
    tags: z.array(z.string()).default([]), // fully optional — empty array if missing
    niche: z.string().default('Neuroscience'), // default niche if missing
    videoUrl: z.string().url().optional().or(z.literal("")).optional(),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog };
