import { el } from "../lib/dom.js";

function initials(company) {
  return company
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

// Deterministic-ish accent pick from --primary/--secondary/--accent so
// fallback avatars aren't all identical, without needing per-company
// color data. Picks based on a simple string hash.
const FALLBACK_TONES = ["tone-a", "tone-b", "tone-c"];
function toneFor(company) {
  let hash = 0;
  for (let i = 0; i < company.length; i++) hash = (hash * 31 + company.charCodeAt(i)) | 0;
  return FALLBACK_TONES[Math.abs(hash) % FALLBACK_TONES.length];
}

function FallbackAvatar(company) {
  return el(
    "div",
    { class: `company-logo company-logo-fallback ${toneFor(company)}`, "aria-hidden": "true" },
    initials(company)
  );
}

// Renders job.logo if present and loadable; otherwise (or on a broken
// path/missing file) swaps to a generated initials avatar. This means
// the resume section looks intentional whether or not every job has a
// logo file on disk yet.
export function CompanyLogo(job) {
  if (!job.logo) return FallbackAvatar(job.company);

  const fallback = FallbackAvatar(job.company);
  const img = el("img", {
    class: "company-logo",
    src: job.logo,
    alt: `${job.company} logo`,
    loading: "lazy",
    width: "40",
    height: "40",
    onError: () => img.replaceWith(fallback),
  });
  return img;
}
