/**
 * CSV export utilities
 */

/**
 * Escapes CSV field value
 */
function escapeCSV(value: unknown): string {
  const str = String(value ?? '');
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

/**
 * Converts array of objects to CSV string
 * @param data - Array of objects
 * @param columns - Column names to include (optional, defaults to all keys)
 * @returns CSV string
 */
export function toCSV<T extends Record<string, unknown>>(
  data: T[],
  columns?: (keyof T)[]
): string {
  if (data.length === 0) return '';

  const cols = columns || (Object.keys(data[0]) as (keyof T)[]);
  const header = cols.map((col) => escapeCSV(String(col))).join(',');

  const rows = data.map((row) =>
    cols.map((col) => escapeCSV(row[col])).join(',')
  );

  return [header, ...rows].join('\n');
}

/**
 * Triggers browser download of CSV file
 */
export function downloadCSV(filename: string, csvContent: string): void {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}
