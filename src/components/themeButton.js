import { el } from "../lib/dom.js";
import { getTheme, toggleTheme, onThemeChange } from "../lib/theme.js";

// Material Symbols ligature names — the element's text content selects
// the glyph, rather than embedding SVG markup directly.
// https://fonts.google.com/icons
const SUN = "light_mode";
const MOON = "dark_mode";

// Shows the icon for the mode you'd SWITCH TO (sun in dark mode, moon in
// light mode) — clicking it in dark mode turns light mode on.
function iconNameFor(theme) {
  return theme === "dark" ? SUN : MOON;
}

export function ThemeButton() {
  const icon = el(
    "span",
    { class: "material-symbols-outlined theme-icon", "aria-hidden": "true" },
    iconNameFor(getTheme())
  );

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
    icon.textContent = iconNameFor(theme);
  });

  return button;
}
