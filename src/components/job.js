import { el } from "../lib/dom.js";
import { SkillsModal, skillsTitle } from "./skillsModal.js";

export function Job(job) {
  return el("article", { class: "card" }, [
    el("header", { class: "card-header" }, [
      el("h3", {}, job.title),
      el("div", { class: "card-meta" }, [
        el("span", { class: "card-company" }, job.company),
        el("span", { class: "card-dates" }, job.dates),
      ]),
    ]),
    el(
      "ul",
      { class: "card-bullets" },
      job.bullets.map((bullet) => el("li", {}, bullet))
    ),
    el("div", { class: "card-actions" }, [
      SkillsModal(skillsTitle(job.skills), job.skills),
    ]),
  ]);
}
