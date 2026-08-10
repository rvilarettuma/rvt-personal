import { el } from "../lib/dom.js";
import text from "../data/about.json" with { type: "json" };

export function About() {
  return el("section", { class: "section", id: "about" }, [
    el("h2", {}, "About"),
    el("p", {}, text.greeting),
    el("p", {}, text.about),
  ]);
}
