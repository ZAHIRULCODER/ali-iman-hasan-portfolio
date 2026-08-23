## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project structure

Single static page, no client-side JavaScript and no UI framework.

- `src/pages/index.astro` — the only route; renders `home.astro` inside `layout.astro`.
- `src/components/home.astro` — section order for the page.
- `src/components/sections/` — one component per section, plus `data.ts`.
  Filenames are kebab-case (`flow-nav.astro`); the imported identifier stays PascalCase
  (`FlowNav`), which Astro requires for components used in a template.
- `src/components/ui/` — the shared primitives. Reach for these before writing markup:
  `section` (container + vertical rhythm), `section-heading` (eyebrow + h2 + lede),
  `eyebrow`, `button`, `marquee`, `arrow`.
- `src/components/sections/data.ts` — **all page copy and asset imports live here.** Edit content
  here rather than hardcoding it into a section.
- `src/styles/global.css` — the design system. Tailwind v4 `@theme` tokens plus a base
  layer and four custom utilities. No config file.

## Design system

Sections should carry tokens, never raw values — no hex colors, no one-off font sizes, no
magic margins.

- **Type**: one fluid step per role (`text-display-xl/lg/md/sm`, `text-stat`, `text-lede`,
  `text-quote`, `text-body`, and the `label` utility). Every step `clamp()`s, so a section
  sets ONE size class and never a responsive `sm:`/`lg:` variant.
- **Headings**: `h1`/`h2`/`h3` and anything marked `.font-display` get family, width axis,
  weight, and uppercase from the base layer. Set only the size.
  Keep display headings at the full measure — at these sizes a half-width column forces
  four-word headlines into three ragged lines and long words overflow their column.
- **Spacing**: `gutter`, `section`, `block`, `stack` (e.g. `pt-section`, `mt-stack`).
- **Motion**: the house curve and duration are installed as Tailwind's DEFAULTS, so a bare
  `transition` is already correct. Only `duration-slow` needs stating. Tailwind v4 has no
  `--duration-*` theme namespace — `duration-base` would silently emit nothing.
- **Color**: `void`/`surface`/`surface-2`, `ink`/`muted`/`faint`, `line`/`line-soft`,
  `accent`/`accent-dim`.

`<main>` carries both `isolate` and `bg-void`. The tool and brand logos rely on
`mix-blend-mode`, which needs an opaque backdrop inside the nearest isolation context —
drop `bg-void` and the blends stop working and the marks render inside visible boxes.

## Fonts

Declared in `astro.config.mjs` under `fonts` and rendered by `<Font />` in `layout.astro`.
Astro downloads them at build time and serves them from our own origin — there are no
requests to fonts.googleapis.com or fonts.gstatic.com, and `optimizedFallbacks` (on by
default) emits a metric-matched fallback `@font-face` so the first paint sits on the same
baseline and line length as the real face. That is what keeps CLS at 0; measured 0 on a
throttled connection with the cache disabled.

**Archivo must stay on the `local` provider.** `fontProviders.google()` returns a
weight-only variable Archivo, and the design depends on the width axis — the base layer
sets `font-stretch: 112%` on headings. With the Google provider that silently becomes a
no-op (every `font-stretch` value measures identically) and the headlines quietly lose their
expanded character. `src/assets/fonts/archivo-latin-var.woff2` is Google's own latin subset
built with both axes (`wdth 100..125`, `wght 400..800`). Setting `stretch` in the config only
writes the `@font-face` descriptor; it does not make a provider fetch the axis.

To check the axis still works, measure a span at several `font-stretch` values — if they all
come back the same width, the axis is gone.

Import with the `~` alias (`~/components/...`), resolved from `paths` in `tsconfig.json`.

Images in `src/assets/` are optimized at build time by `astro:assets`; only files imported by
`data.ts` are bundled. Keep asset filenames lowercase and match the import to the tracked
filename exactly: Windows is case-insensitive, so a `.JPG` file imported as `.jpg` builds
fine locally and then fails the Linux deploy with `[ImageNotFound]`. Check with
`git ls-files src/assets`, which shows the name git actually stores.

Run `pnpm check` before committing.
