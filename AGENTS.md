# NeuroPulse Blog — Agent Context
Last Updated: 2026-08-26

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
Instagram: @nrplse (Business, Facebook linked)
YouTube: @NeuroPulseMind

## PowerShell Note
Use semicolon ; not && to chain commands:
git add -A; git commit -m "msg"; git push origin main
