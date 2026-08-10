// lib/dom.js
// Minimal helper so component files can stay declarative without JSX/React.
// el(tag, attrs, children) -> HTMLElement

export function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);

  for (const [key, value] of Object.entries(attrs)) {
    if (value == null || value === false) continue;
    if (key === "class") {
      node.className = value;
    } else if (key === "html") {
      // Only ever pass trusted, hard-coded strings here (e.g. an inline SVG icon).
      node.innerHTML = value;
    } else if (key.startsWith("on") && typeof value === "function") {
      node.addEventListener(key.slice(2).toLowerCase(), value);
    } else if (key === "dataset") {
      Object.assign(node.dataset, value);
    } else {
      node.setAttribute(key, value);
    }
  }

  const list = Array.isArray(children) ? children : [children];
  for (const child of list) {
    if (child == null || child === false) continue;
    node.append(child instanceof Node ? child : document.createTextNode(String(child)));
  }

  return node;
}

// Convenience: mount a list of top-level nodes into a container.
export function mount(root, nodes) {
  root.replaceChildren(...nodes);
}
