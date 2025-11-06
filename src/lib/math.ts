/**
 * Math utilities for metrics and computations
 */

/**
 * Calculates mean of array of numbers
 */
export function mean(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, val) => sum + val, 0) / values.length;
}

/**
 * Calculates median of array of numbers
 */
export function median(values: number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

/**
 * Calculates standard deviation
 */
export function stdDev(values: number[]): number {
  if (values.length === 0) return 0;
  const avg = mean(values);
  const squareDiffs = values.map((val) => Math.pow(val - avg, 2));
  return Math.sqrt(mean(squareDiffs));
}

/**
 * Clamps value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Normalizes value from [oldMin, oldMax] to [newMin, newMax]
 */
export function normalize(
  value: number,
  oldMin: number,
  oldMax: number,
  newMin: number,
  newMax: number
): number {
  if (oldMax === oldMin) return newMin;
  return ((value - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin;
}

/**
 * Calculates percentage with optional decimal places
 */
export function percentage(value: number, total: number, decimals = 1): number {
  if (total === 0) return 0;
  return Number(((value / total) * 100).toFixed(decimals));
}
