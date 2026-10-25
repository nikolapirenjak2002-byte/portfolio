# Project Guidelines

## Build and Test

- `npm run dev` starts the local development server.
- `npm run build` creates and checks the production build.
- `npm run start` serves the production build.
- `npm run lint` runs ESLint across the project; to lint one file, use `npx eslint app/page.tsx` (replace the path as needed).
- There is no test script or test framework configured yet, so no single-test command is available.

## Architecture

- This is a Next.js 16.4.3 App Router project. Routes and their layouts belong under the root `app/` directory; the home route is `app/page.tsx`.
- `app/layout.tsx` owns the root HTML shell, document metadata, global font setup, and the import of `app/globals.css`. Keep site-wide styles and Tailwind theme tokens in that stylesheet; use route files for page content.
- Tailwind CSS v4 is processed through the Turbopack CSS loader configured in `next.config.ts`. The `@/*` TypeScript alias resolves from the repository root.
- Static files in `public/` are served from the site root. Use `next/image` for image rendering where appropriate.
- App Router components are Server Components by default; add a client boundary only for UI that needs browser state, event handlers, or other client-only behavior.
- The site uses static export (`output: "export"`) for GitHub Pages. Route pages and contact-form behavior must work without a Next.js server; keep project subpath support through `NEXT_BASE_PATH` and `NEXT_PUBLIC_BASE_PATH`.

## Conventions

- Keep route content in `app/`, shared document concerns in `app/layout.tsx`, and global design tokens in `app/globals.css`.
- The root layout uses `next/font` for Geist and Geist Mono and provides their CSS variables to Tailwind. Reuse those variables when adding typography rather than introducing another font setup without a project need.
- `next.config.ts` configures static export, trailing slashes, optional GitHub Pages base paths, unoptimized images, and Tailwind's Turbopack loader. Preserve these settings when changing the build configuration.
- Before making Next.js-specific changes, consult the relevant guide in `node_modules/next/dist/docs/`. The root `AGENTS.md` notes that this installed Next.js version has breaking changes and that `next dev` regenerates its marked Next.js guidance block; don't remove that generated block.
