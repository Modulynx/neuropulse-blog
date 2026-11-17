// sources.ts — the "Sources" list at the end of an article: the study from the frontmatter first, then every
// link in the article body that points at a paper (DOI, PubMed, PMC, a journal site), each once.
const PAPER = /(doi\.org|pubmed\.ncbi|ncbi\.nlm\.nih\.gov\/pmc|pmc\.ncbi|nature\.com|science\.org|pnas\.org|sciencedirect|springer|wiley|tandfonline|sagepub|jamanetwork|thelancet|nejm\.org|bmj\.com|frontiersin|plos|mdpi\.com|academic\.oup|cell\.com)/i;

export type Source = { label: string; url: string };

export function collectSources(body: string, study?: { title: string; authors?: string; journal: string; year: number; url: string }): Source[] {
  const out: Source[] = [];
  const seen = new Set<string>();
  const norm = (u: string) => u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/+$/, "").toLowerCase();
  if (study) {
    out.push({ label: `${study.authors ? study.authors + " " : ""}(${study.year}). ${study.title}. ${study.journal}.`, url: study.url });
    seen.add(norm(study.url));
  }
  const re = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(body || ""))) {
    const [, label, url] = m;
    if (!PAPER.test(url) || seen.has(norm(url))) continue;
    seen.add(norm(url));
    out.push({ label: label.replace(/[*_]/g, ""), url });
  }
  return out;
}

export const hasAmazonLink = (body: string) => /\]\(https?:\/\/(www\.)?(amazon\.com|amzn\.to)\//i.test(body || "");
