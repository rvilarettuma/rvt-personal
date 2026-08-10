import { el } from "../lib/dom.js";
import { Job } from "./job.js";
import jobs from "../data/resume.json" with { type: "json" };

export function Resume() {
  return el("section", { class: "section", id: "resume" }, [
    el("h2", {}, "Resume"),
    ...jobs.map(Job),
  ]);
}
