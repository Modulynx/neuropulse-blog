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
    description: z.string().min(50).max(300), // relaxed: n8n sometimes writes 50-300 chars
    pubDate: z.coerce.date(),
    author: z.string().default("Ethan Cole — Neuroscience Writer & Educator"),
    authorId: z.string().default("ethan-cole"),
    tags: z.array(z.string()).min(1).max(10), // relaxed: n8n may send 0-10 tags
    niche: z.string().optional(),
    videoUrl: z.string().url().optional().or(z.literal("")).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
