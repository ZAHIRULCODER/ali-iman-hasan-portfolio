# Ali Iman Hassan — portfolio

An Astro-powered, dark-mode-only portfolio for Ali Iman Hassan, an AI strategist, content
manager, and filmmaker. A single static page with no client-side JavaScript and no UI
framework: Astro components, Tailwind CSS v4, build-optimized local images, and three
self-hosted webfonts.

## Requirements

- Node.js `22.12` or newer
- pnpm

Check your installed versions:

```sh
node --version
pnpm --version
```

## Run locally

From the project root:

```sh
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

For a background development server, use:

```sh
pnpm astro dev --background
```

Manage the background server with:

```sh
pnpm astro dev status
pnpm astro dev logs
pnpm astro dev stop
```

## Commands

| Command | Description |
| --- | --- |
| `pnpm install` | Install project dependencies. |
| `pnpm dev` | Start the local Astro development server. |
| `pnpm astro dev --background` | Start the development server in the background. |
| `pnpm check` | Run Astro and TypeScript diagnostics. |
| `pnpm build` | Create the optimized static site in `dist/`. |
| `pnpm preview` | Preview the production build locally. Run `pnpm build` first. |
| `pnpm astro -- --help` | Show available Astro CLI commands. |

## Production verification

Run the project checks before deploying:

```sh
pnpm check
pnpm build
pnpm preview
```

The production output is generated in `dist/` and can be deployed to any static hosting
provider.

## Project structure

```text
/
├── public/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── ali-iman-hasan-avatar.jpeg
│   │   ├── brands/                     21 client logos (brand marquee)
│   │   ├── fonts/
│   │   │   └── archivo-latin-var.woff2 two-axis variable Archivo
│   │   ├── portfolio/                  7 selected-work images
│   │   └── tools/                      8 toolchain logos
│   ├── components/
│   │   ├── home.astro                  section order for the page
│   │   ├── sections/                   one component per section
│   │   │   ├── brands.astro
│   │   │   ├── contact.astro
│   │   │   ├── data.ts                 all page copy and asset imports
│   │   │   ├── flow-nav.astro
│   │   │   ├── header.astro
│   │   │   ├── hero.astro
│   │   │   ├── principles.astro
│   │   │   ├── statement.astro
│   │   │   ├── stats.astro
│   │   │   ├── system.astro
│   │   │   └── work.astro
│   │   └── ui/                         shared primitives
│   │       ├── arrow.astro
│   │       ├── button.astro
│   │       ├── eyebrow.astro
│   │       ├── marquee.astro
│   │       ├── section.astro
│   │       └── section-heading.astro
│   ├── layouts/
│   │   └── layout.astro
│   ├── pages/
│   │   └── index.astro                 the only route
│   └── styles/
│       └── global.css                  the design system
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

Filenames are kebab-case (`flow-nav.astro`), while the imported identifier stays PascalCase
(`FlowNav`) — Astro requires a capitalized identifier for components used in a template.

## Updating content

Most portfolio content is maintained in:

```text
src/components/sections/data.ts
```

Update this file to change:

- Selected work projects
- Project images, descriptions, tags, and accessibility alt text
- Career statistics
- Workflow steps
- Working principles
- Toolchain names
- The hero image

Add new portfolio images to `src/assets/portfolio/` and import them in `data.ts`. Images used
with Astro's `Image` component are optimized during the build. Only files imported by
`data.ts` are bundled.

Keep asset filenames lowercase, and match each import to the tracked filename exactly.
Windows is case-insensitive, so a `.JPG` file imported as `.jpg` builds fine locally and then
fails the Linux deploy with `[ImageNotFound]`. Check with `git ls-files src/assets`, which
shows the name git actually stores.

## Design system

`src/styles/global.css` holds the whole system: Tailwind v4 `@theme` tokens, a base layer,
and a handful of custom utilities. There is no `tailwind.config.js` — v4 is configured
entirely in CSS. Sections should carry tokens, never raw values: no hex colors, no one-off
font sizes, no magic margins.

- **Type** — one fluid step per role (`text-display-xl/lg/md/sm`, `text-stat`, `text-lede`,
  `text-quote`, `text-body`, and the `label` utility). Every step uses `clamp()`, so a
  section sets one size class and never a responsive `sm:`/`lg:` variant.
- **Headings** — `h1`/`h2`/`h3` and anything marked `.font-display` inherit family, width
  axis, weight, and uppercase from the base layer. Set only the size. Keep display headings
  at the full measure; in a half-width column, long words overflow their column and short
  headlines break into ragged lines.
- **Spacing** — `gutter`, `section`, `block`, `stack` (e.g. `pt-section`, `mt-stack`).
- **Color** — `void`/`surface`/`surface-2`, `ink`/`muted`/`faint`, `line`/`line-soft`,
  `accent`/`accent-dim`.
- **Container** — the `shell` utility (max width plus gutter) and `shell-flush` (the same box
  without the gutter, for grids whose cells own their padding so a hover fill reaches the
  container edge instead of stopping short of it).
- **Motion** — the house easing curve and duration are installed as Tailwind's defaults, so a
  bare `transition` is already correct. Only `duration-slow` needs stating. Tailwind v4 has
  no `--duration-*` theme namespace, so a class like `duration-base` would silently emit
  nothing.

Reach for `src/components/ui/` before writing new markup: `section` (container and vertical
rhythm), `section-heading` (eyebrow, heading, lede), `eyebrow`, `button`, `marquee`, `arrow`.

`<main>` carries both `isolate` and `bg-void`. The tool and brand logos rely on
`mix-blend-mode`, which needs an opaque backdrop inside the nearest isolation context — drop
`bg-void` and the blends stop working and the marks render inside visible boxes.

Component `<style>` blocks reference CSS variables directly rather than using `@apply`, which
is the approach the Tailwind v4 docs recommend and which avoids needing `@reference`.

## Fonts

Three families, declared in `astro.config.mjs` under `fonts` and rendered by `<Font />` in
`src/layouts/layout.astro`: **Archivo** (display), **Inter** (body), and **JetBrains Mono**
(labels).

Astro downloads them at build time and serves them from this origin, so there are no runtime
requests to `fonts.googleapis.com` or `fonts.gstatic.com`. `optimizedFallbacks` (on by
default) emits a metric-matched fallback `@font-face`, so the first paint sits on the same
baseline and line length as the real face and the page does not reflow when the fonts arrive.

**Archivo must stay on the `local` provider.** `fontProviders.google()` returns a weight-only
variable Archivo, and the design depends on the width axis — the base layer sets
`font-stretch: 112%` on headings. With the Google provider that silently becomes a no-op and
the headlines lose their expanded character. `src/assets/fonts/archivo-latin-var.woff2` is
Google's own latin subset built with both axes (`wdth 100..125`, `wght 400..800`). Setting
`stretch` in the config only writes the `@font-face` descriptor; it does not make a provider
fetch the axis. To check the axis still works, measure a span at several `font-stretch`
values — if they all come back the same width, the axis is gone.

## Conventions

- Dark mode only.
- Use the `~` alias for imports from `src`, for example:

  ```ts
  import Hero from "~/components/sections/hero.astro";
  ```

- Use double quotes in JavaScript, TypeScript, Astro, and configuration files.
- Keep component and function names descriptive and avoid portfolio-specific prefixes.
- Reuse the design tokens above instead of adding arbitrary CSS values.

## Accessibility and performance

- Use descriptive `alt` text for meaningful images, describing what the image actually shows
  rather than what it is meant to evoke.
- Keep the skip link and semantic landmarks intact.
- Keep headings in a logical hierarchy.
- The hero image is prioritized for the initial viewport.
- Work images use lazy loading and asynchronous decoding because they are below the fold.
- Marquees pause on hover and on focus, and stop entirely under
  `prefers-reduced-motion: reduce`, which also switches them to manual horizontal scrolling
  so the duplicated half stays reachable.
- Run `pnpm check` after structural or component changes.

## Configuration

- `astro.config.mjs` enables Tailwind CSS through the Vite plugin, declares the three font
  families, and configures the `~` import alias. The alias is repeated there because Rolldown
  does not read `paths` from `tsconfig.json`.
- `tsconfig.json` defines the same `~/*` path alias for TypeScript and editor support.
- `src/layouts/layout.astro` defines document metadata, the dark color scheme, favicon links,
  font preloads, and global styles.

## Documentation

- [Astro documentation](https://docs.astro.build)
- [Astro fonts](https://docs.astro.build/en/guides/fonts/)
- [Astro project structure](https://docs.astro.build/en/basics/project-structure/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
