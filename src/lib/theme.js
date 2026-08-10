// lib/theme.js
// State lives on <html data-theme>, styled entirely via CSS custom
// properties (see style.css).
//
// Two sources of truth, in priority order:
//   1. An explicit choice the user made via the theme button — persisted
//      to localStorage and, once set, always wins.
//   2. The OS-level color-scheme preference — read on load, and followed
//      live if the user has never made an explicit choice.

const STORAGE_KEY = "theme-preference";
const media = matchMedia("(prefers-color-scheme: dark)");

function getSystemTheme() {
  return media.matches ? "dark" : "light";
}

// Returns "light" | "dark" | null. null means "no explicit choice yet —
// follow the system".
function getStoredPreference() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "light" || saved === "dark" ? saved : null;
}

export function getInitialTheme() {
  return getStoredPreference() ?? getSystemTheme();
}

// Call this as early as possible (before first paint) to avoid a flash
// of the wrong theme, and to start listening for OS theme changes.
export function applyInitialTheme() {
  document.documentElement.dataset.theme = getInitialTheme();

  media.addEventListener("change", (event) => {
    // An explicit user choice always overrides the OS setting.
    if (getStoredPreference() !== null) return;
    const next = event.matches ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    notifyThemeChange(next);
  });
}

export function getTheme() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

// User-initiated toggle: sets an explicit, persisted override that takes
// precedence over the OS preference from now on.
export function toggleTheme() {
  const next = getTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem(STORAGE_KEY, next);
  notifyThemeChange(next);
  return next;
}

// Clears the explicit override and goes back to following the OS setting.
// Not wired to any UI yet, but exported for a future "match system" option.
export function clearThemeOverride() {
  localStorage.removeItem(STORAGE_KEY);
  const next = getSystemTheme();
  document.documentElement.dataset.theme = next;
  notifyThemeChange(next);
  return next;
}

export function hasExplicitPreference() {
  return getStoredPreference() !== null;
}

// Simple pub/sub so components (ThemeButton) can react to theme changes
// that originate from the OS listener above, not just from clicks.
const listeners = new Set();
export function onThemeChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
function notifyThemeChange(theme) {
  listeners.forEach((fn) => fn(theme));
}
