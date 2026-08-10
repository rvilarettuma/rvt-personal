import { el } from "../lib/dom.js";
import { ThemeButton } from "./themeButton.js";

export function Header() {
  return el("header", { class: "site-header" }, [
    el("h1", {}, "Richard Vilaret-Tuma"),
    ThemeButton(),
  ]);
}
