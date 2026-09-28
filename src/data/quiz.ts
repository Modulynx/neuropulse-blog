// quiz.ts — the NeuroPulse Diagnostic (text: Product/diagnostic.md, from the Protocol PDF, Section 1).
// Customer-facing result names are FOG / MEMORY / ENERGY (decision 2026-09-28). The PDF's internal
// labels (Alzheimer's research markers) are NEVER shown as a quiz result.
import type { SwitchKey } from "./site";

export const LETTER_TO_KEY: Record<"A" | "B" | "C", SwitchKey> = { A: "FOG", B: "MEMORY", C: "ENERGY" };

export const QUESTIONS: { q: string; a: string; b: string; c: string }[] = [
  { q: "By mid-afternoon, you usually feel:", a: "Foggy — thoughts moving through static", b: "Focus is fine, but you keep forgetting what you were about to do", c: "Physically drained, even if you didn't do much" },
  { q: "When you try to recall something from earlier today:", a: "It's just gone. Not fuzzy — absent.", b: "It's there, but takes real effort to pull back, like it's stuck", c: "You remember fine, you just don't have energy to care" },
  { q: "Your sleep, most nights:", a: "Inconsistent in timing — different bedtime most nights", b: "Timed fine, but you wake still thinking about stress", c: "Feels unrefreshing even at 7–8 hours" },
  { q: "Multitasking leaves you feeling:", a: "Scattered — nothing got your full attention", b: "Like you can't remember what happened five minutes ago", c: "Wired but exhausted afterward" },
  { q: "Your reaction to small frustrations lately:", a: "Slow to respond, not irritable", b: "You forget you were even frustrated ten minutes later", c: "You snap faster than you used to" },
  { q: "Alcohol or a poor night's sleep hits you:", a: "With noticeably slower thinking the next day", b: "With worse memory for a day or two", c: "With full-body, lingering foggy exhaustion" },
  { q: "Physical movement during your day:", a: "Minimal — you sit most of the day", b: "Happens, but your mind still feels stuck", c: "Minimal, and you feel it in your energy specifically" },
  { q: "Your stress load over the last month:", a: "Moderate, steady", b: "High — a lot on your mind, frequently", c: "High and physical — you feel it in your body" },
  { q: "When you learn something new, a week later:", a: "You remember it happened, not the details", b: "It's gone, like it never encoded", c: "You remember it if you're not exhausted that day" },
  { q: "“Wired-but-tired” describes you:", a: "Rarely", b: "Sometimes", c: "Constantly" },
];

// One free action per switch (the first core step of the matching protocol, see the CheatSheet).
// The full protocol, the reasons and the 30-day tracker are the paid product.
export const RESULTS: Record<SwitchKey, { title: string; lever: string; why: string; action: string }> = {
  FOG: {
    title: "FOG — your sleep-timing switch",
    lever: "Core lever: sleep depth and timing",
    why: "Your answers point to sleep as the main lever. Deep, regular sleep is when the brain does much of its overnight maintenance — irregular timing makes that harder, and the next day feels like thinking through static.",
    action: "Anchor one fixed wake time — the same time every day, weekends included — and get about 10 minutes of outdoor light within 30 minutes of waking.",
  },
  MEMORY: {
    title: "MEMORY — your encoding + stress switch",
    lever: "Core lever: how new information gets stored, and stress",
    why: "Your answers point to encoding: new things never get stored firmly, and a busy, stressed mind crowds them out. It feels like a focus problem, but the root is usually stress plus how you take things in.",
    action: "Test yourself instead of re-reading: after anything you want to keep, close it and write down three things you remember. And take one 10-minute window today with no phone.",
  },
  ENERGY: {
    title: "ENERGY — your body-load switch",
    lever: "Core lever: sleep, food and movement together",
    why: "Your answers point to your body's overall load — the wired-but-tired pattern. Here the fix is not more intensity but steadier basics.",
    action: "Take a brisk walk at a pace where you can still hold a conversation (Zone 2). Easy and regular beats hard and rare for this switch.",
  },
};

export const DISCLAIMER =
  "Educational content only — not medical advice, and not a diagnosis or treatment for any condition. If symptoms are sudden, worsening, or paired with a family history of neurodegenerative disease, see a physician rather than following a habit protocol.";
