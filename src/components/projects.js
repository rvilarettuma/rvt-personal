import { el } from "../lib/dom.js";
import projects from "../data/projects.json" with { type: "json" };

function ProjectAccordion(project) {
  const links = [];
  if (project.link) {
    links.push(
      el(
        "a",
        { class: "button button-solid", href: project.link, target: "_blank", rel: "noopener noreferrer" },
        ["\u{1F517} Project"]
      )
    );
  }
  if (project.source) {
    links.push(
      el(
        "a",
        { class: "button button-solid", href: project.source, target: "_blank", rel: "noopener noreferrer" },
        ["\u{1F5AB} Source"]
      )
    );
  }

  // <details>/<summary> gives an accordion with zero JS, matching what
  // MUI's <Accordion> was doing, plus it's keyboard- and screen-reader-
  // accessible by default.
  return el("details", { class: "project" }, [
    el("summary", {}, [
      el("strong", {}, project.name),
      el("span", { class: "project-stack" }, project.stack),
    ]),
    el("div", { class: "project-body" }, [
      el("p", {}, project.description),
      links.length ? el("div", { class: "project-links" }, links) : null,
    ]),
  ]);
}

export function Projects() {
  return el("section", { class: "section", id: "projects" }, [
    el("h2", {}, "Projects"),
    ...projects.map(ProjectAccordion),
  ]);
}
