export function Home() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Axial Coding Studio</h1>
      <p className="text-lg text-text-muted mb-6">
        A local-first qualitative coding tool for researchers
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-border rounded p-4 hover:bg-bg-secondary">
          <h3 className="font-bold">Getting Started</h3>
          <p className="text-sm text-text-muted">Start with the Paste Wizard to import your transcript</p>
        </div>
        <div className="border border-border rounded p-4 hover:bg-bg-secondary">
          <h3 className="font-bold">Local-First</h3>
          <p className="text-sm text-text-muted">All data stays on your machine. No telemetry.</p>
        </div>
        <div className="border border-border rounded p-4 hover:bg-bg-secondary">
          <h3 className="font-bold">Deterministic</h3>
          <p className="text-sm text-text-muted">Same seed produces identical results</p>
        </div>
        <div className="border border-border rounded p-4 hover:bg-bg-secondary">
          <h3 className="font-bold">Undo/Redo</h3>
          <p className="text-sm text-text-muted">Every action is reversible</p>
        </div>
      </div>
    </div>
  );
}
