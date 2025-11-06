
export function AxialBoard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Axial Board</h1>
      <p className="text-text-muted mb-4">
        Drag codes into categories. Multi-select and keyboard navigation supported.
      </p>
      <div className="grid grid-cols-4 gap-4">
        {['Unassigned', 'Category A', 'Category B', 'Category C'].map((cat) => (
          <div key={cat} className="border border-border rounded p-4 bg-bg-secondary">
            <h3 className="font-bold mb-2">{cat}</h3>
            <div className="space-y-2">
              <div className="p-2 bg-bg border border-border rounded">Code 1</div>
              <div className="p-2 bg-bg border border-border rounded">Code 2</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
