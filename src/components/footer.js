import { el } from "../lib/dom.js";

const LINKEDIN_SVG = `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>`;
const GITHUB_SVG = `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.27 5.68.42.36.78 1.08.78 2.18v3.23c0 .3.21.67.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>`;

function socialLink(href, label, svg) {
  return el(
    "a",
    { class: "icon-button", href, target: "_blank", rel: "noopener noreferrer", "aria-label": label },
    [el("span", { html: svg })]
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return el("footer", { class: "footer" }, [
    el("hr", { class: "divider" }),
    el("div", { class: "footer-icons" }, [
      socialLink("https://www.linkedin.com/in/richard-vilaret-tuma/", "Go to Richard's LinkedIn", LINKEDIN_SVG),
      socialLink("https://github.com/rvilarettuma", "Go to Richard's GitHub", GITHUB_SVG),
    ]),
    el("p", { class: "footer-copyright" }, `\u00A9 ${year} Richard Vilaret-Tuma`),
  ]);
}
