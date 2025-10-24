# Wu-Wei

A modern web portfolio/site built with Next.js (App Router) and React. It uses Tailwind CSS v4 for styling, GSAP for animations, and Lenis for smooth scrolling. The codebase mixes TypeScript support with predominantly JSX components.

This README documents the stack, requirements, setup, commands, project structure, and outstanding TODOs.

## Overview
- Framework: Next.js 16 (App Router)
- UI: React 19
- Styling: Tailwind CSS v4, PostCSS
- Animations: GSAP (@gsap/react, ScrollTrigger, CustomEase), Lenis smooth scrolling
- Icons: lucide-react, react-icons
- Transitions: next-view-transitions, motion
- Language: JavaScript/TypeScript (TypeScript config present; many components are .jsx)
- Linting/Formatting: ESLint 9, eslint-config-next, Prettier

## Requirements
- Node.js: 18.18+ (recommended 20 LTS or newer)
  - Note: Exact engines are not pinned in package.json. TODO: Add `engines` field once the team finalizes target Node version.
- npm (package-lock.json present, indicating npm is the package manager)

## Getting Started
1) Install dependencies
```bash
npm install
```

2) Run the development server
```bash
npm run dev
```
Then open http://localhost:3000 in your browser.

3) Build for production
```bash
npm run build
```

4) Start the production server (after build)
```bash
npm run start
```

## Scripts
Defined in package.json:
- dev: next dev
- build: next build
- start: next start
- lint: eslint

## Project Structure
Top-level directories and notable files:
```
.
├─ app/                     # Next.js App Router (routes, pages, layouts)
│  ├─ page.tsx              # Home route (/)
│  ├─ work/page.jsx         # /work
│  ├─ contact/page.jsx      # /contact
│  ├─ archive/page.jsx      # /archive
│  ├─ sample-project/page.jsx  # /sample-project
│  └─ studio/page.jsx       # /studio
├─ components/              # Reusable UI components (Copy, Menu, etc.)
├─ contants/                # Project constants (e.g., portfolio.js) [sic]
├─ lib/                     # Utility modules (if any present)
├─ public/                  # Static assets (images, icons, etc.)
├─ client-layout.js         # Client-side layout wrapper with Lenis & Menu
├─ next.config.ts           # Next.js configuration
├─ tsconfig.json            # TypeScript configuration
├─ eslint.config.mjs        # ESLint configuration
├─ postcss.config.mjs       # PostCSS configuration
├─ components.json          # Component tooling config (if applicable)
├─ package.json             # Scripts and dependencies
├─ package-lock.json        # npm lockfile (indicates npm usage)
└─ README.md
```

### Entry Points and Routing
- Primary entry: app/page.tsx (client component using GSAP animations and a preloader)
- Additional routes: app/work/page.jsx, app/contact/page.jsx, app/archive/page.jsx, app/sample-project/page.jsx, app/studio/page.jsx
- Client layout helper: client-layout.js wraps children with ReactLenis and includes the Menu component

## Configuration Notes
- next.config.ts currently sets `typescript.ignoreBuildErrors: true` to avoid type-check build failures. TODO: Revisit once type coverage improves.
- Tailwind CSS v4 is configured (postcss + tailwind packages present). Styles are declared in app/globals.css and component-level classNames.
- ESLint 9 with `eslint-config-next` is available via `npm run lint`.

## Environment Variables
No environment variables are currently referenced in the repository.
- TODO: If/when env vars are introduced, document them here and in a `.env.example` file.

## Testing
No test framework or tests were found in this repository.
- TODO: Add tests (e.g., Jest/Vitest for unit tests, Playwright/Cypress for E2E) and document how to run them.

## Development Tips
- This project uses both .tsx and .jsx files. TypeScript support exists, but many components are plain JSX.
- Animations rely on GSAP and may access the DOM; ensure components using GSAP are client components ("use client").
- Smooth scrolling is handled by Lenis (see client-layout.js). Review settings for mobile vs desktop behavior.

## Deployment
- Any Node-capable host that supports Next.js can be used.
- Vercel is a common choice for Next.js deployments. See Next.js docs for deployment guides: https://nextjs.org/docs/app/building-your-application/deploying

## License
No license file detected in the repository.
- TODO: Add a LICENSE file (e.g., MIT, Apache-2.0) and update this section accordingly.
