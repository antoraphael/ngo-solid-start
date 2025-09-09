// vite.config.ts
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { resolve } from "path";

export default defineConfig({
  plugins: [solidPlugin()],
  // no aliasing to keep everything relative imports only
  server: { port: 5173 },
  build: { target: "esnext" },
});
