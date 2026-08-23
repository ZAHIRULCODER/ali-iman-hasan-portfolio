// @ts-check
import { fileURLToPath } from "node:url";

import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// Rolldown does not read `paths` from tsconfig.json, so the `~` alias has to be
// declared here as well for `astro build` to resolve it. Use `fileURLToPath`
// rather than `new URL(...).pathname`: the latter yields "/C:/..." on Windows,
// which never matches, so the alias only worked on Linux.
// https://astro.build/config
export default defineConfig({
   // Fonts are downloaded at build time and served from our own origin. This
   // replaces the two render-blocking hops to fonts.googleapis.com and
   // fonts.gstatic.com, and — with `optimizedFallbacks` (on by default) —
   // Astro emits a metric-matched fallback @font-face so the first paint sits
   // on the same baseline and line length as the real face. That is what stops
   // the layout jumping on refresh. Same three families as before.
   fonts: [
      {
         // Served from a self-hosted file rather than fontProviders.google(),
         // which returns a WEIGHT-ONLY variable Archivo. The design depends on
         // the width axis (global.css sets `font-stretch: 112%` on headings),
         // and with the Google provider that silently became a no-op: every
         // stretch value measured identically. This file is Google's own
         // latin subset built with both axes (wdth 100..125, wght 400..800).
         name: "Archivo",
         cssVariable: "--font-archivo",
         provider: fontProviders.local(),
         options: {
            variants: [
               {
                  src: ["./src/assets/fonts/archivo-latin-var.woff2"],
                  weight: "400 800",
                  stretch: "100% 125%",
                  style: "normal",
               },
            ],
         },
         fallbacks: ["Arial Narrow", "Arial", "sans-serif"],
      },
      {
         name: "Inter",
         cssVariable: "--font-inter",
         provider: fontProviders.google(),
         weights: ["400 600"],
         styles: ["normal"],
         subsets: ["latin"],
         fallbacks: ["system-ui", "sans-serif"],
      },
      {
         name: "JetBrains Mono",
         cssVariable: "--font-jetbrains-mono",
         provider: fontProviders.google(),
         weights: ["400 500"],
         styles: ["normal"],
         subsets: ["latin"],
         fallbacks: ["ui-monospace", "monospace"],
      },
   ],
   vite: {
      plugins: [tailwindcss()],
      resolve: {
         alias: {
            "~": fileURLToPath(new URL("./src", import.meta.url)),
         },
      },
   },
});
