# Axial Coding Studio

This project is a Vite + React + TypeScript workspace scaffolded for qualitative data analysis tooling. It includes routing,
state, data, and visualization dependencies commonly used when building an axial coding studio experience.

## Getting started

```bash
npm install
npm run dev
```

## Available scripts

- `npm run dev` – start the Vite development server.
- `npm run build` – type-check and create a production build.
- `npm run preview` – preview the production build locally.
- `npm run typecheck` – run TypeScript without emitting files.
- `npm run lint` – run ESLint with the TypeScript configuration.
- `npm run test` – execute Vitest in the configured JSDOM environment.

## Tech stack

- React 18 with React Router 7 for routing.
- Tailwind CSS for utility-first styling.
- Zustand for lightweight state management.
- Dexie for IndexedDB access.
- D3, @dnd-kit/core, zod, marked, nanoid, and clsx for analytics, drag-and-drop, schema validation, markdown, ids, and class
  composition.
- Vitest and Testing Library for unit testing.

## Project structure

```
src/
  demo/
  db/
  features/
  hooks/
  lib/
  parser/
  state/
  styles/
  tests/
  types/
  ui/
  workers/
```

Each folder currently contains a placeholder file so it is tracked in version control. Routes are defined in `src/routes.tsx`
with stubs for the major axial coding workflows.
