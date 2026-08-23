An Astro-powered, dark-mode-only portfolio for Ali Iman Hassan, an AI strategist, content manager, and filmmaker. The site uses Astro components, Tailwind CSS utilities, optimized local image assets, and system font stacks with no external font requests.

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
| `pnpm astro check` | Run Astro and TypeScript diagnostics. |
| `pnpm build` | Create the optimized static site in `dist/`. |
| `pnpm preview` | Preview the production build locally. Run `pnpm build` first. |
| `pnpm astro -- --help` | Show available Astro CLI commands. |

## Production verification

Run the project checks before deploying:

```sh
pnpm astro check
pnpm build
pnpm preview
```

The production output is generated in `dist/` and can be deployed to any static hosting provider.

## Project structure

```text
/
├── public/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   ├── background.svg
│   │   └── portfolio/
│   ├── components/
│   │   ├── Home.astro
│   │   └── sections/
│   │       ├── Contact.astro
│   │       ├── FlowNav.astro
│   │       ├── Header.astro
│   │       ├── Hero.astro
│   │       ├── Principles.astro
│   │       ├── Statement.astro
│   │       ├── Stats.astro
│   │       ├── System.astro
│   │       ├── Work.astro
│   │       └── data.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

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

Add new portfolio images to `src/assets/portfolio/` and import them in `data.ts`. Images used with Astro's `Image` component are optimized during the build.

## Design system conventions

- Dark mode only.
- Styling uses Tailwind CSS utilities.
- Theme colors and font stacks live in `src/styles/global.css` under `@theme`.
- Custom font network requests are not used. The site uses stable system font stacks.
- Use the `~` alias for imports from `src`, for example:

  ```ts
  import Hero from "~/components/sections/Hero.astro";
  ```

- Use double quotes in JavaScript, TypeScript, Astro, and configuration files.
- Keep component and function names descriptive and avoid portfolio-specific prefixes.
- Reuse existing Tailwind spacing, sizing, color, and typography utilities instead of adding arbitrary CSS values.

## Accessibility and performance

- Use descriptive `alt` text for meaningful images.
- Keep the skip link and semantic landmarks intact.
- Keep headings in a logical hierarchy.
- The hero image is prioritized for the initial viewport.
- Work images use lazy loading and asynchronous decoding because they are below the fold.
- Run `pnpm astro check` after structural or component changes.

## Configuration

- `astro.config.mjs` enables Tailwind CSS through the Vite plugin and configures the `~` import alias.
- `tsconfig.json` defines the same `~/*` path alias for TypeScript and editor support.
- `src/layouts/Layout.astro` defines document metadata, the dark color scheme, favicon links, and global styles.

## Documentation

- [Astro documentation](https://docs.astro.build)
- [Astro project structure](https://docs.astro.build/en/basics/project-structure/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Astro styling](https://docs.astro.build/en/guides/styling/)
