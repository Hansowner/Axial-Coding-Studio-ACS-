# Axial Coding Studio (ACS)

A local-first qualitative coding tool for researchers.

## Features

- **Local-First**: All data stays on your machine. No telemetry, no external APIs.
- **Deterministic**: Same seed produces identical results (seeded PRNG for reproducibility).
- **Undo/Redo**: Every action is reversible with comprehensive action logging.
- **Parser Studio**: Intelligent transcript parsing with pattern learning.
- **Axial Coding**: Drag-and-drop category builder for thematic analysis.
- **Relationship Mapping**: Define when-then relationships between themes.
- **Quality Gates**: Built-in metrics to ensure rigorous analysis.

## Tech Stack

- **Frontend**: React 19 + TypeScript (strict mode)
- **Routing**: React Router v7
- **State**: Zustand with action log for undo/redo
- **Database**: Dexie (IndexedDB wrapper)
- **UI**: Tailwind CSS with local fonts
- **Build**: Vite
- **Testing**: Vitest + React Testing Library

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Type check
npm run typecheck

# Lint
npm run lint

# Build for production
npm run build
```

## Project Structure

```
src/
├── features/      # Feature modules (paste-wizard, merge-ledger, axial-board, etc.)
├── ui/            # Reusable UI components
├── lib/           # Utility functions (PRNG, text processing, math)
├── db/            # Dexie database schema and migrations
├── state/         # Zustand store with action log
├── parser/        # Transcript parsing pipeline
├── workers/       # Web Workers for heavy computation
├── hooks/         # Custom React hooks
└── types/         # TypeScript type definitions
```

## Routes

- `/` - Home
- `/paste` - Paste Wizard (import transcripts)
- `/merge` - Merge Ledger (combine similar codes)
- `/axial` - Axial Board (category builder)
- `/matrices/coverage` - Coverage Matrix
- `/matrices/cooccurrence` - Co-occurrence Matrix
- `/network` - Network Graph
- `/relationships` - Relationship Builder
- `/metrics` - Metrics Panel
- `/export` - Export Panel

## Development

Built with strict TypeScript, ESLint, and Prettier. All quality gates must pass:

- ✅ Type checking (no implicit `any`)
- ✅ Linting (React hooks rules)
- ✅ Tests (determinism verified)
- ✅ Local-first (no network calls)

## License

TBD
