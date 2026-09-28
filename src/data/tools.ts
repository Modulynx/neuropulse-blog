// tools.ts — simple tools that support each switch's protocol. NO supplements (decision 2026-09-25).
// Links are Amazon searches carrying our Associates tag (site.ts AMAZON_TAG); swap `query` for an
// exact product link later if a specific item converts better. Descriptions make no health claims.
import type { SwitchKey } from "./site";

export const TOOLS: Record<SwitchKey, { intro: string; items: { name: string; why: string; query: string }[] }> = {
  FOG: {
    intro: "For a fixed wake time and a real morning-light habit.",
    items: [
      { name: "Sunrise alarm clock", why: "Wakes you with slowly rising light at the same time every day.", query: "sunrise alarm clock" },
      { name: "Analog alarm clock", why: "Lets the phone sleep outside the bedroom.", query: "analog alarm clock bedside" },
      { name: "Contoured sleep mask", why: "Keeps the room dark when your bedtime is fixed but the sky is not.", query: "contoured sleep mask" },
    ],
  },
  MEMORY: {
    intro: "For self-testing and a daily phone-free window.",
    items: [
      { name: "Index cards", why: "The simplest tool for testing yourself instead of re-reading.", query: "index cards 3x5 ruled" },
      { name: "Visual countdown timer", why: "Makes a 10-minute no-phone window easy to keep.", query: "visual countdown timer" },
      { name: "Phone lock box with timer", why: "Puts the phone out of reach until the timer ends.", query: "timed phone lock box" },
    ],
  },
  ENERGY: {
    intro: "For easy, regular movement at a conversation pace.",
    items: [
      { name: "Under-desk walking pad", why: "Easy walking while you work or watch.", query: "under desk walking pad" },
      { name: "Chest-strap heart rate monitor", why: "Shows when you are in an easy, conversation-pace zone.", query: "chest strap heart rate monitor" },
      { name: "Step counter", why: "A simple daily movement number without the phone.", query: "simple pedometer step counter" },
    ],
  },
};
