import { el } from "../lib/dom.js";

// Replaces MUI's <Dialog>. The native <dialog> element gives us focus
// trapping, Esc-to-close, and a backdrop for free.
export function SkillsModal(title, skills) {
  const dialog = el("dialog", { class: "skills-dialog" }, [
    el("div", { class: "skills-dialog-header" }, [
      el("h3", {}, "Skills"),
      el(
        "button",
        {
          class: "icon-button",
          "aria-label": "Close",
          onClick: () => dialog.close(),
        },
        "\u2715"
      ),
    ]),
    el(
      "ul",
      { class: "skills-list" },
      skills.map((skill) => el("li", {}, skill))
    ),
  ]);

  const trigger = el(
    "button",
    {
      class: "button button-outline",
      onClick: () => dialog.showModal(),
    },
    [el("span", { class: "icon", "aria-hidden": "true" }, "\u25C6"), " ", title]
  );

  // Clicking the backdrop (outside the dialog's own box) closes it.
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });

  return el("div", { class: "skills-modal" }, [trigger, dialog]);
}

export function skillsTitle(skills) {
  switch (skills.length) {
    case 0:
      return "Skills";
    case 1:
      return skills[0];
    case 2:
      return `${skills[0]} and ${skills[1]}`;
    default:
      return `${skills[0]}, ${skills[1]} and +${skills.length - 2} skills`;
  }
}
