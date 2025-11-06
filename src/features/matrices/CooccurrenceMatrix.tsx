import { HeatmapGrid } from '../../ui/HeatmapGrid';

export function CooccurrenceMatrix() {
  const demoData = [
    [1.0, 0.5, 0.2],
    [0.5, 1.0, 0.3],
    [0.2, 0.3, 1.0],
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Co-occurrence Matrix</h1>
      <p className="text-text-muted mb-4">
        Shows how often codes appear together in the same quote.
      </p>
      <HeatmapGrid data={demoData} />
    </div>
  );
}
