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
- `src/components/sections/data.ts` — **all page copy and asset imports live here.** Edit content
  here rather than hardcoding it into a section.
- `src/styles/global.css` — Tailwind v4 `@theme` tokens (colors, fonts). No config file.

Import with the `~` alias (`~/components/...`), resolved from `paths` in `tsconfig.json`.

Images in `src/assets/` are optimized at build time by `astro:assets`; only files imported by
`data.ts` are bundled. Keep asset filenames lowercase and match the import to the tracked
filename exactly: Windows is case-insensitive, so a `.JPG` file imported as `.jpg` builds
fine locally and then fails the Linux deploy with `[ImageNotFound]`. Check with
`git ls-files src/assets`, which shows the name git actually stores.

Run `pnpm check` before committing.
