# NeuroPulse Blog — Agent Context
Last Updated: 2026-07-28

## Current Status: LIVE on Vercel
URL: https://neuropulse-blog.vercel.app

## Kit (ConvertKit) Form ID: 9647814
## Gumroad Product: https://neurovibes.gumroad.com/l/neuropulse-protocol

## Key Files:
- src/components/LeadMagnet.astro — Email capture (Kit form)
- src/components/ProtocolCallout.astro — $9 product CTA (Gumroad)
- src/pages/about.astro — About page
- src/utils/readingTime.ts — Reading time calculator

---

# NeuroPulse Blog — Claude Briefing

You are working on the **NeuroPulse Blog**, an AI-powered neuroscience content site that automatically publishes articles via n8n → GitHub → Astro → Vercel.

## Project Location
`Desktop/Reelflow/neuropulse-blog/` (Astro 7.1, Vanilla CSS, NO Tailwind)

## Revenue Model (Critical Context)
```
n8n generates articles (AI) → GitHub repo → Astro builds → neuropulse.blog
                                                               ↓
                                              3 monetization paths:
  1. LeadMagnet (email form) → Email list → Affiliate email campaigns
  2. ProtocolCallout → $9 Gumroad product "NeuroPulse Protocol"
  3. Inline affiliate links in article body (Amazon, ClickBank products)
```
Every design and code decision must serve conversion. The goal is to maximize:
- Time on page
- Email signups
- $9 product clicks

## Design System — NON-NEGOTIABLE RULES

### Colors (CSS Variables in global.css)
```css
--bg: #050810;        /* Page background */
--bg-elev: #111726;   /* Cards, callouts, raised surfaces */
--bg-elev-2: #161D30; /* Hover states, nested surfaces */
--border: #1F2A44;    /* All borders */
--text: #E8ECF5;      /* Primary text */
--text-dim: #A2ADC6;  /* Secondary, captions, metadata */
--cyan: #4CE0D2;      /* Primary accent: links, focus, neuroscience data */
--magenta: #FF3D8A;   /* CTAs ONLY: email submit buttons */
--violet: #8B5CF6;    /* Product callout ONLY: ProtocolCallout component */
```

### Color Usage Rules
- **Cyan**: nav links, metadata, eyebrow labels, borders on focus
- **Magenta**: ONLY on submit/CTA buttons. NEVER for body text.
- **Violet**: ONLY for the $9 product callout (ProtocolCallout.astro)
- NEVER use any color not in this palette.

### Typography
```
--font-display: "Space Grotesk"  — Headings, buttons, labels
--font-body: "Inter"             — Body text
--font-mono: "JetBrains Mono"    — Eyebrows (// labels), dates, counts
```

### Design Aesthetic "Blueprint"
- Dark Navy-Black (#050810) — like a scientific blueprint
- Cards look like "specimen slides" from a neuroscience lab
- Eyebrow labels use `//` prefix: `// neuroscience`, `// free guide`
- Hover effects: translateY(-3px) on cards, arrow slides right
- Scan-line animation on ArticleCard hover (see existing component)
- NO box-shadows — use borders and gradients only
- Max border-radius: 14px (`--radius: 14px`)
- NO Tailwind — all CSS written as scoped `<style>` in components

## File Structure
```
src/
  components/
    ArticleCard.astro      COMPLETE — do NOT break
    LeadMagnet.astro       Needs real ESP endpoint (ACTION constant)
    ProtocolCallout.astro  Needs real Gumroad URL (PRODUCT_URL constant)
    Navbar.astro           MISSING — create this
    Footer.astro           MISSING — create this
  layouts/
    BaseLayout.astro       COMPLETE
    ArticleLayout.astro    COMPLETE (SEO/JSON-LD)
  pages/
    index.astro            COMPLETE (homepage)
    blog/
      index.astro          COMPLETE (blog grid)
      [slug].astro         COMPLETE (article page)
  styles/
    global.css             COMPLETE — design tokens here
  content/
    blog/                  Markdown articles from n8n
  content.config.ts        COMPLETE (Zod schema)
```

## Content Schema (must match n8n output)
```typescript
title: z.string().max(60)
description: z.string().min(120).max(160)
pubDate: z.coerce.date()
author: z.string()
authorId: z.string()
tags: z.array(z.string()).min(4).max(6)
niche: z.string().optional()
videoUrl: z.string().url().optional().or(z.literal(""))
draft: z.boolean().default(false)
```

## Development Commands
```bash
npm run dev      # Start dev server on localhost:4321
npm run build    # Build for production
```

## Your Priority Tasks

### TASK 1 — Create Navbar.astro
Sticky dark navbar with:
- Logo left: "NeuroPulse" in Space Grotesk, cyan dot after it
- Nav links: Blog, About (right side)
- CTA button: "Get the Guide" — magenta background, white text
- On scroll: add subtle backdrop-blur + border-bottom
- Mobile: hamburger menu

### TASK 2 — Create Footer.astro
Simple minimal footer:
- Dark background (#050810), cyan top border
- Left: © 2026 NeuroPulse — All rights reserved
- Center: nav links (Blog, About, Privacy)
- Right: "Built with Astro ⚡"

### TASK 3 — Update BaseLayout + ArticleLayout
Add `<Navbar />` after `<body>` and `<Footer />` before `</body>` in both layouts.

### TASK 4 — Relax content.config.ts schema
Change:
- `description.min(120)` → `description.min(50)` 
- `tags.min(4)` → `tags.min(1)`
This prevents n8n-generated articles from failing the Astro build.

### TASK 5 — Improve CTA placement in [slug].astro
Currently both CTAs are only at the END. Fix to this order:
1. First 40% of article content
2. LeadMagnet (email capture at peak engagement)
3. Next 30% of content  
4. ProtocolCallout ($9 product)
5. Final content
6. LeadMagnet again (second chance)

This requires splitting `<Content />` — Astro doesn't support mid-content injection natively.
Solution: Add the CTAs in the article markdown using custom components, OR add a fixed sticky sidebar CTA for desktop.

Recommended approach: Add a **sticky sidebar** on desktop (position:sticky) showing both CTAs, and keep inline CTAs on mobile.

### TASK 6 — Add Reading Time to ArticleCard
Calculate reading time from description length (estimate). Show as `// 5 min read` in mono font.

### TASK 7 — Add Related Posts to [slug].astro
At bottom of each article, show 2 other posts with same tags as ArticleCard components.

## Monetization Priority Reminder
The $9 ProtocolCallout and LeadMagnet are the ONLY two revenue touch points on the site right now. Every UX decision should make these more visible and persuasive without being spammy.
