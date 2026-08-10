import { el } from "../lib/dom.js";
import { getTheme, toggleTheme, onThemeChange } from "../lib/theme.js";

const SUN = `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-14a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm0 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM4 11a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2h1zm18 0a1 1 0 0 1 0 2h-1a1 1 0 1 1 0-2h1zM5.64 4.93a1 1 0 0 1 1.41 0l.71.7A1 1 0 1 1 6.35 7.05l-.7-.71a1 1 0 0 1 0-1.41zm11.31 11.31a1 1 0 0 1 1.41 0l.71.71a1 1 0 0 1-1.42 1.41l-.7-.7a1 1 0 0 1 0-1.42zm0-11.31a1 1 0 0 1 0 1.41l-.7.71a1 1 0 1 1-1.42-1.41l.71-.71a1 1 0 0 1 1.41 0zM7.05 17.65a1 1 0 0 1 0 1.42l-.71.7A1 1 0 1 1 4.93 18.36l.7-.71a1 1 0 0 1 1.42 0z"/></svg>`;
const MOON = `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>`;

// Shows the icon for the mode you'd SWITCH TO (sun in dark mode, moon in
// light mode) — this is the "light mode button" the header asked for:
// clicking it in dark mode turns light mode on.
function iconFor(theme) {
  return theme === "dark" ? SUN : MOON;
}

export function ThemeButton() {
  const icon = el("span", { html: iconFor(getTheme()) });

  const button = el(
    "button",
    {
      class: "icon-button theme-button",
      "aria-label": "Toggle color theme",
      onClick: () => toggleTheme(),
    },
    [icon]
  );

  // Keep the icon in sync if the theme changes from somewhere other than
  // this button — e.g. the OS-level listener in lib/theme.js.
  onThemeChange((theme) => {
    icon.innerHTML = iconFor(theme);
  });

  return button;
}
