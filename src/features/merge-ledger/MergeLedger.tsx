import { Table } from '../../ui/Table';

export function MergeLedger() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Merge Ledger</h1>
      <p className="text-text-muted mb-4">
        Merge similar codes with drag and drop. Suggestions based on string similarity and co-occurrence.
      </p>
      <Table
        headers={['Code', 'Similar To', 'Similarity', 'Actions']}
        rows={[
          ['Code A', 'Code B', '0.85', <button key="merge">Merge</button>],
        ]}
      />
    </div>
  );
}
