import { el } from "../lib/dom.js";

const STRINGS = [
  "Software Developer",
  "SysAdmin",
  "Web Developer",
  "DevOps Engineer",
  "IT Generalist",
];

const TYPE_SPEED_MS = 70;
const DELETE_SPEED_MS = 35;
const HOLD_MS = 1400;

// Replaces the `typewriter-effect` npm package with ~25 lines of vanilla JS.
export function Typewriter() {
  const textEl = el("span", { class: "typewriter-text" });
  const heading = el("h2", { class: "typewriter" }, [
    textEl,
    el("span", { class: "typewriter-cursor", "aria-hidden": "true" }, "|"),
  ]);

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const word = STRINGS[wordIndex];
    textEl.textContent = word.slice(0, charIndex);

    let delay = deleting ? DELETE_SPEED_MS : TYPE_SPEED_MS;

    if (!deleting && charIndex === word.length) {
      deleting = true;
      delay = HOLD_MS;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % STRINGS.length;
    } else {
      charIndex += deleting ? -1 : 1;
    }

    setTimeout(tick, delay);
  }

  tick();
  return heading;
}
