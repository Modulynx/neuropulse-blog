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
    authorId: z.string().default("neuropulse-team"),
    tags: z.array(z.string()).default([]), // fully optional — empty array if missing
    niche: z.string().default('Neuroscience'), // default niche if missing
    videoUrl: z.string().url().optional().or(z.literal("")).optional(),
    draft: z.boolean().default(false),
    unlisted: z.boolean().default(false),  // 2026-11-19: out of the lists, RSS and sitemap, noindex, a note on top; the URL stays (src/utils/listed.ts)
    heroImage: z.string().optional(),
    // Design refresh 2026-11-17 (all optional; an article without them builds as before)
    heroAlt: z.string().optional(),       // what the hero shows, for screen readers
    heroCaption: z.string().optional(),   // the caption under the hero; no caption = the hero is not shown (see SHOW_UNCAPTIONED_HERO)
    study: z.object({                     // "The study" card + the Sources list
      title: z.string(),
      authors: z.string().optional(),
      journal: z.string(),
      year: z.coerce.number(),
      sample: z.string().optional(),      // e.g. "12 adults in a sleep lab"
      url: z.string().url(),              // DOI or PubMed link
    }).optional(),
  }),
});

export const collections = { blog };
