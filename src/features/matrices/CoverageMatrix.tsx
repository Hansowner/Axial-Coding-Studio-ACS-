import { HeatmapGrid } from '../../ui/HeatmapGrid';

export function CoverageMatrix() {
  const demoData = [
    [0.8, 0.6, 0.3],
    [0.5, 0.9, 0.4],
    [0.2, 0.3, 0.7],
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Coverage Matrix</h1>
      <p className="text-text-muted mb-4">
        Visualize which codes cover which quotes. Brush to select and group.
      </p>
      <HeatmapGrid data={demoData} />
    </div>
  );
}
