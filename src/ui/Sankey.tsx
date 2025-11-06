
export interface SankeyProps {
  nodes: { id: string; label: string }[];
  links: { source: string; target: string; value: number }[];
}

export function Sankey({ nodes, links }: SankeyProps) {
  // Stub implementation - would use D3 in full version
  return (
    <div className="rounded border border-border bg-bg-secondary p-4">
      <p className="text-sm text-text-muted">Sankey diagram placeholder</p>
      <p className="text-xs text-text-muted">
        {nodes.length} nodes, {links.length} links
      </p>
    </div>
  );
}
