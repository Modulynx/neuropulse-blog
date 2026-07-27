// readingTime.ts — estimates reading time from raw markdown body text.
//
// Strips the markdown syntax that would otherwise inflate the word count
// (headers, emphasis markers, links, images, blockquote/list markers, code
// fences) before splitting on whitespace. Assumes 200 words/minute, the
// commonly cited average for adult silent reading, and always rounds up
// so a 30-second note still reads as "1 min read" rather than "0 min read".

const WORDS_PER_MINUTE = 200;

export function estimateReadingMinutes(markdown: string): number {
  if (!markdown) return 1;

  const plain = markdown
    .replace(/```[\s\S]*?```/g, " ") // fenced code blocks
    .replace(/`[^`]*`/g, " ") // inline code
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ") // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // links -> link text
    .replace(/^#{1,6}\s+/gm, "") // headers
    .replace(/^>\s?/gm, "") // blockquotes
    .replace(/^[-*+]\s+/gm, "") // unordered list markers
    .replace(/^\d+\.\s+/gm, "") // ordered list markers
    .replace(/[*_~]{1,3}/g, "") // emphasis/strikethrough markers
    .replace(/^-{3,}\s*$/gm, " "); // horizontal rules

  const words = plain.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}
