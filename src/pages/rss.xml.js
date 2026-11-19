// rss.xml.js — the article feed (design refresh 2026-11-17). Newest first, drafts left out.
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { isListed } from "../utils/listed";

export async function GET(context) {
  const posts = (await getCollection("blog", isListed)).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return rss({
    title: "NeuroPulse",
    description: "One brain study at a time, explained plainly. Every claim links to its paper.",
    site: context.site,
    items: posts.map((p) => ({ title: p.data.title, description: p.data.description, pubDate: p.data.pubDate, link: `/blog/${p.id}/` })),
  });
}
