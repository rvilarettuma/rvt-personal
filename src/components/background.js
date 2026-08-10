import { el } from "../lib/dom.js";

// Soft blurred color fields behind the page content. Two drift gently on
// their own (pure CSS animation); a third follows the cursor. All three
// are colored via CSS custom properties, so they automatically match
// whichever theme is active — no JS color logic needed here.
export function Background() {
  const cursorBlob = el("div", { class: "bg-blob bg-blob-cursor" });

  const container = el("div", { class: "bg-glow", "aria-hidden": "true" }, [
    el("div", { class: "bg-blob bg-blob-1" }),
    el("div", { class: "bg-blob bg-blob-2" }),
    cursorBlob,
  ]);

  const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isCoarsePointer = matchMedia("(pointer: coarse)").matches;

  if (!prefersReducedMotion && !isCoarsePointer) {
    let queued = false;
    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;

    const applyPosition = () => {
      container.style.setProperty("--cursor-x", `${lastX}px`);
      container.style.setProperty("--cursor-y", `${lastY}px`);
      queued = false;
    };

    window.addEventListener(
      "pointermove",
      (event) => {
        lastX = event.clientX;
        lastY = event.clientY;
        if (queued) return;
        queued = true;
        requestAnimationFrame(applyPosition);
      },
      { passive: true }
    );
  }

  return container;
}
