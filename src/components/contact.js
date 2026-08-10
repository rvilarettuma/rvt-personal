import { el } from "../lib/dom.js";

export function Contact() {
  return el("section", { class: "section", id: "contact" }, [
    el("h2", {}, "Contact"),
    el("p", {}, "Feel free to contact me on LinkedIn!"),
  ]);
}
