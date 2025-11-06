
export interface HeatmapGridProps {
  data: number[][];
  labels?: string[];
}

export function HeatmapGrid({ data, labels }: HeatmapGridProps) {
  return (
    <div className="overflow-auto">
      <div className="inline-grid gap-1" style={{ gridTemplateColumns: `repeat(${data[0]?.length || 0}, 40px)` }}>
        {data.map((row, i) =>
          row.map((value, j) => (
            <div
              key={`${i}-${j}`}
              className="h-10 w-10 flex items-center justify-center text-xs"
              style={{
                backgroundColor: `rgba(37, 99, 235, ${value})`,
                color: value > 0.5 ? 'white' : 'black',
              }}
              title={labels ? `${labels[i]} - ${labels[j]}: ${value}` : `${value}`}
            >
              {Math.round(value * 100)}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
