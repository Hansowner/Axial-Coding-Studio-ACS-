import React from 'react';

export interface TableProps {
  headers: string[];
  rows: React.ReactNode[][];
}

export function Table({ headers, rows }: TableProps) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-border bg-bg-secondary">
          {headers.map((header, i) => (
            <th key={i} className="px-4 py-2 text-left font-medium">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-border hover:bg-bg-secondary">
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
