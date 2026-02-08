// src/main.tsx
// import "@solid-devtools/debugger/setup";
import "./index.css";
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import App from "./App";
// import { attachDebugger } from "@solid-devtools/debugger";

// if (import.meta.env.DEV) {
//   attachDebugger();
// }

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root") as HTMLElement,
);
