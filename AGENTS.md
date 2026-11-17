# NeuroPulse Blog — Agent Context
Last Updated: 2026-09-02

## Status: FULLY LIVE
URL: https://neuropulsemind.com
Platform: Astro 7.1 - GitHub - Vercel (auto-deploy on push to main)
Repo: https://github.com/Modulynx/neuropulse-blog.git

## Master Context File (اقرأه أولاً)
C:\Users\THINPAD T440\.gemini\antigravity\brain\8846a262-af98-431b-abe5-a69d83974b1a\NEUROPULSE_MASTER.md

## Kit Integration
Form ID: 9647814
After subscribe redirect: https://neuropulsemind.com/thank-you/
PDF Lead Magnet: /brain-owners-manual.pdf

## Revenue
Gumroad $9: neurovibes.gumroad.com/l/neuropulse-protocol
Amazon Associates tag: neuropulse0e-20

## Customer Journey (COMPLETE)
Social -> /guide/ -> Kit Form 9647814 -> /thank-you/ -> PDF + upsell -> Gumroad $9

## Live Pages
/ = Homepage | /blog/ = 7 articles | /guide/ = PRIMARY entry
/thank-you/ | /protocol/ | /about/

## Design Rules (STRICT) — design refresh 2026-11-17 (replaces the dark editorial rules)
Style: a small, careful science publication on paper. NO AI-looking elements (no gradient blobs, glows, emoji headings, generic icons, card grids, sparkles, "// " code labels).
Fonts: ONE serif = Source Serif 4 (headings + article text), Inter for small UI text. Both self-hosted via @fontsource-variable (no Google Fonts request).
Colors (src/styles/global.css, names kept): --bg #FAF8F3 paper, --text #1E1C19 ink, --cyan #0B5D57 links, --magenta #9E3A22 the one action button, --amber #6E4A00 small labels. Contrast >= 4.5:1 everywhere (axe: 0 violations).
Article page: date + reading time, title, standfirst, "By NeuroPulse", hero (only OUR captioned still; heroCaption required to show it), "The study" card (frontmatter `study`), "What this study can't tell us" note (an H2 with that text), Sources, Amazon disclosure when the text has an Amazon link, about box, free guide, 2 related.
Home: one line on who we are, the latest article big, then a plain list (date + one line). /blog = the same list.
Images: only our video stills / post images (scripts/blog_images.js in Reelflow writes them as WebP with alt, width, height, lazy). Never stock photos of people or logos of real apps.
Author: "NeuroPulse" (no invented people).

## Schema Rules (content.config.ts) — CRITICAL
title: max 80 chars — BREAKS BUILD if exceeded
pubDate: must be past datetime at build time
heroImage: /images/blog/filename.jpg or "" (SVG placeholder shown)

## Current Articles (7)
1. 90-minute-focus-block.md
2. cold-showers-neuroscience.md
3. dopamine-reset.md
4. dopamine-system-broken.md
5. late-night-scrolling-wired-brain.md
6. why-does-your-brain-drown-in-chaos.md
7. coffee-timing-cortisol-brain.md

## Key Files
src/content.config.ts = Zod schema (check before adding articles)
src/styles/global.css = Design tokens
src/pages/about.astro = SVG icons, no emoji
src/components/ArticleCard.astro = Cards (SVG placeholder)

## Infrastructure
Domain: neuropulsemind.com (Porkbun) | Email: hello@neuropulsemind.com (Zoho)
Instagram: @neuropulsemind (Bio -> /guide/) | YouTube: @NeuroPulseMind

## PowerShell Note
Use ; not && to chain commands: git add -A; git commit -m "msg"; git push origin main


## Status: FULLY LIVE
URL: https://neuropulsemind.com
Platform: Astro 7.1 - GitHub - Vercel (auto-deploy on push to main)
Repo: https://github.com/Modulynx/neuropulse-blog.git

## Kit Integration
Form ID: 9647814
After subscribe redirect: https://neuropulsemind.com/thank-you/
After confirmation redirect: https://neuropulsemind.com/thank-you/
PDF Lead Magnet: /brain-owners-manual.pdf (329KB)

## Revenue
Gumroad $9: neurovibes.gumroad.com/l/neuropulse-protocol
Amazon Associates tag: neuropulse0e-20

## Customer Journey (COMPLETE)
Social Media -> /guide/ -> Kit Form 9647814 -> confirm email -> /thank-you/ -> PDF + upsell -> /protocol/ -> Gumroad $9

## Live Pages
/ = Homepage (6 articles)
/blog/ = Blog grid
/blog/[slug]/ = Articles
/guide/ = Lead magnet squeeze (PRIMARY entry point)
/thank-you/ = PDF download + $9 upsell
/protocol/ = $9 sales page
/about/ = The NeuroPulse Team

## Design Rules
Colors: --bg #050810, --cyan #4CE0D2 (primary), --magenta #FF3D8A (CTAs only), --violet #8B5CF6 (product only)
Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (eyebrows // prefix)
NO Tailwind. NO box-shadows. max-radius 14px.
Author: "The NeuroPulse Team" (Ethan Cole removed everywhere)
Navbar CTA links to /guide/#capture (anchor scroll)

## Key Files
public/brain-owners-manual.pdf = Free PDF (329KB)
src/pages/guide.astro = Lead magnet squeeze page
src/pages/thank-you.astro = PDF delivery + upsell
src/components/LeadMagnet.astro = Kit form (action: app.kit.com/forms/9647814/subscriptions)
src/components/Navbar.astro = CTA -> /guide/#capture
src/content.config.ts = Zod schema (author default: The NeuroPulse Team)
src/styles/global.css = Design tokens

## Infrastructure
Domain: neuropulsemind.com (Porkbun $10.08/yr)
Email: hello@neuropulsemind.com (Zoho Forever Free)
DNS: SPF + DKIM + DMARC configured
Analytics: Placeholder comment (Plausible removed - add Cloudflare Analytics when ready)
n8n Dev: localhost:5678 (ThinkPad)
n8n Prod: n8n.reelflow.online (Dell - EXPIRES 31 Aug 2026 URGENT)

## Social
Instagram: @neuropulsemind (Business, Facebook linked)
YouTube: @NeuroPulseMind

## PowerShell Note
Use semicolon ; not && to chain commands:
git add -A; git commit -m "msg"; git push origin main
