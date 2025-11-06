import { Table } from '../../ui/Table';

export function MetricsPanel() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Metrics Panel</h1>
      <p className="text-text-muted mb-4">
        Category-level metrics and quality gate status.
      </p>
      <div className="mb-6 p-4 border border-success rounded bg-green-50">
        <h2 className="font-bold text-success">✓ Quality Gate Passed</h2>
        <ul className="text-sm mt-2 space-y-1">
          <li>✓ At least one theme with ≥40% coverage</li>
          <li>✓ At least one theme with avg pain &gt;7</li>
          <li>✓ At least one theme with ≥50% inadequacy</li>
        </ul>
      </div>
      <Table
        headers={['Category', 'Coverage %', 'Avg Pain', 'Inadequacy %']}
        rows={[
          ['Theme A', '45%', '7.5', '55%'],
          ['Theme B', '30%', '6.2', '40%'],
        ]}
      />
    </div>
  );
}
