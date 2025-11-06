/**
 * Parser worker for offloading heavy parsing to background thread
 */

import type { WorkerRequest, WorkerResponse, ParsedRow, ParseStats } from '../types/messages';
import { normalizeText } from '../parser/normalize';
import { segmentText } from '../parser/segment';
import { applyRule, detectPainScore, detectAdequacyScore } from '../parser/detectors';
import { calculateConfidence } from '../parser/confidence';

self.onmessage = (e: MessageEvent<WorkerRequest>) => {
  const request = e.data;

  try {
    if (request.type === 'parse') {
      const { raw, profile } = request.payload;

      // Normalize text
      const normalized = normalizeText(raw, profile.cleaningToggles);

      // Segment
      const segments = segmentText(normalized);

      // Parse each segment
      const rows: ParsedRow[] = segments.map((segment) => {
        const detections = profile.rules
          .filter((rule) => rule.enabled)
          .flatMap((rule) => applyRule(segment.text, rule));

        const painScore = detectPainScore(segment.text);
        const adequacyScore = detectAdequacyScore(segment.text);

        const confidence = calculateConfidence({
          hasDetections: detections.length > 0,
          detectionCount: detections.length,
          textLength: segment.text.length,
          hasStructure: !!segment.speaker,
        });

        return {
          text: segment.text,
          lineStart: segment.lineStart,
          lineEnd: segment.lineEnd,
          speaker: segment.speaker,
          painScore,
          adequacyScore,
          confidence,
          provenance: detections.map((d) => d.provenance),
          suggestedCodes: detections
            .filter((d) => d.type === 'code')
            .map((d) => String(d.value)),
        };
      });

      const stats: ParseStats = {
        totalRows: rows.length,
        highConfidence: rows.filter((r) => r.confidence >= 0.55).length,
        lowConfidence: rows.filter((r) => r.confidence < 0.55).length,
        avgConfidence: rows.reduce((sum, r) => sum + r.confidence, 0) / rows.length,
        detectedCodes: new Set(rows.flatMap((r) => r.suggestedCodes)).size,
        rulesApplied: profile.rules.filter((r) => r.enabled).length,
      };

      const response: WorkerResponse = {
        type: 'parse-complete',
        payload: { rows, stats },
      };

      self.postMessage(response);
    }
  } catch (error) {
    const errorResponse: WorkerResponse = {
      type: 'error',
      error: {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
      },
    };
    self.postMessage(errorResponse);
  }
};
