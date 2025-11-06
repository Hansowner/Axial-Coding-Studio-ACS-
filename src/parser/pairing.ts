/**
 * Pair detected tokens with nearest quotes
 * Prefer "after" quote, window of 2 segments
 */

import type { Segment } from './segment';
import type { Detection } from './detectors';

export interface PairedSegment extends Segment {
  detections: Detection[];
}

export function pairTokensToQuotes(
  segments: Segment[],
  detections: Detection[]
): PairedSegment[] {
  // For now, simple pairing: attach all detections to all segments
  // TODO: Implement proximity-based pairing with window=2
  return segments.map((seg) => ({
    ...seg,
    detections: [...detections],
  }));
}
