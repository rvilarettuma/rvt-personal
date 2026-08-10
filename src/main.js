import { applyInitialTheme } from "./lib/theme.js";
import { Background } from "./components/background.js";
import { Header } from "./components/header.js";
import { Typewriter } from "./components/typewriter.js";
import { About } from "./components/about.js";
import { Resume } from "./components/resume.js";
import { Projects } from "./components/projects.js";
import { Contact } from "./components/contact.js";
import { Footer } from "./components/footer.js";

// Set data-theme before first paint (avoids a flash of the wrong theme)
// and start following the OS theme for anyone who hasn't made an
// explicit choice yet.
applyInitialTheme();

// The background sits behind everything else in the document, so it's
// mounted directly on <body> rather than inside #root.
document.body.prepend(Background());

const root = document.querySelector("#root");
root.append(
  Header(),
  Typewriter(),
  About(),
  Resume(),
  Projects(),
  Contact(),
  Footer()
);
