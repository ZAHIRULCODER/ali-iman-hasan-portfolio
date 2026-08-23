// @ts-check
import { fileURLToPath } from "node:url";

import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// Rolldown does not read `paths` from tsconfig.json, so the `~` alias has to be
// declared here as well for `astro build` to resolve it. Use `fileURLToPath`
// rather than `new URL(...).pathname`: the latter yields "/C:/..." on Windows,
// which never matches, so the alias only worked on Linux.
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./src", import.meta.url))
      }
    }
  }
});
