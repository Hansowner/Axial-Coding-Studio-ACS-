import { Button } from '../../ui/Button';

export function ExportPanel() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Export Panel</h1>
      <p className="text-text-muted mb-4">
        Export your project data in various formats.
      </p>
      <div className="space-y-4">
        <div className="border border-border rounded p-4">
          <h3 className="font-bold mb-2">CSV Exports</h3>
          <div className="space-x-2">
            <Button size="sm">Quotes</Button>
            <Button size="sm">Codes</Button>
            <Button size="sm">Category Metrics</Button>
            <Button size="sm">Relationships</Button>
          </div>
        </div>
        <div className="border border-border rounded p-4">
          <h3 className="font-bold mb-2">JSON Bundle</h3>
          <Button size="sm">Export Project JSON</Button>
        </div>
        <div className="border border-border rounded p-4">
          <h3 className="font-bold mb-2">Markdown Report</h3>
          <Button size="sm">Generate Report</Button>
        </div>
      </div>
    </div>
  );
}
