// listed.ts — which articles appear in the lists (home, /blog, /start, "Read next"), the RSS feed and the sitemap.
// An article with `unlisted: true` (2026-11-19: the old July-October articles under review) is left out of all of them,
// gets `noindex` and a note on top, but its page stays at the same URL, so old links never break. Never delete a URL.
export const isListed = ({ data }: { data: { draft?: boolean; unlisted?: boolean } }) => data.draft !== true && data.unlisted !== true;
export const UNLISTED_NOTE = "This article is under review: it was written before our one-study rules, and we are checking it against the research.";
