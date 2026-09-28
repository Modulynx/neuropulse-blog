// site.ts — the funnel's external links in ONE place (owner fills these; no secrets here).
// Every value below is public (it ends up in the page HTML anyway).

// Kit (ConvertKit) public form endpoint. One form per quiz result lets each form start its own
// email sequence (FOG / MEMORY / ENERGY). Empty per-type id → the default form is used and the
// result travels in the hidden field fields[np_type] (create custom fields np_type + np_source in Kit).
export const KIT_DEFAULT_FORM = "9647814";
export const KIT_FORMS: Record<SwitchKey, string> = { FOG: "", MEMORY: "", ENERGY: "" };
export const kitAction = (key: SwitchKey) =>
  `https://app.kit.com/forms/${KIT_FORMS[key] || KIT_DEFAULT_FORM}/subscriptions`;

// $9 product — live on Gumroad since 2026-09-28 (7-day money-back guarantee on Gumroad). Set PRODUCT_LIVE = false to hide every product link.
export const PRODUCT_LIVE = true;
export const PRODUCT_URL = "https://neuropulsemind.gumroad.com/l/neuropulse-protocol";
export const productLink = (key?: SwitchKey) => PRODUCT_URL + (key ? `?type=${key.toLowerCase()}` : "");

// Amazon Associates tracking id (e.g. "neuropulse-20"). Empty → /tools shows the list without buy links.
export const AMAZON_TAG = "";
export const GUARANTEE_DAYS = 7;   // must match the Gumroad refund policy
export const AMAZON_DISCLOSURE = "As an Amazon Associate, NeuroPulse earns from qualifying purchases.";

export type SwitchKey = "FOG" | "MEMORY" | "ENERGY";
