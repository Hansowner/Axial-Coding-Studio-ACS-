/**
 * Confidence scoring for parsed rows
 * Low confidence (<0.55) goes to inbox
 */

export function calculateConfidence(factors: {
  hasDetections: boolean;
  detectionCount: number;
  textLength: number;
  hasStructure: boolean;
}): number {
  let confidence = 0.5; // Base

  if (factors.hasDetections) confidence += 0.2;
  if (factors.detectionCount > 1) confidence += 0.1;
  if (factors.textLength > 20) confidence += 0.1;
  if (factors.hasStructure) confidence += 0.1;

  return Math.min(1.0, confidence);
}
