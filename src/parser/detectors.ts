/**
 * Pattern detectors for quotes, codes, pain, adequacy
 */

import type { ParserRule, Provenance } from '../types/domain';

export interface Detection {
  type: ParserRule['type'];
  value: string | number;
  confidence: number;
  provenance: Provenance;
}

/**
 * Apply a single rule to text
 */
export function applyRule(text: string, rule: ParserRule): Detection[] {
  if (!rule.enabled) return [];

  const detections: Detection[] = [];
  const regex = new RegExp(rule.pattern, 'gi');
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    detections.push({
      type: rule.type,
      value: match[0],
      confidence: 0.8, // Base confidence
      provenance: {
        ruleId: rule.id,
        ruleType: rule.type,
        match: match[0],
        startOffset: match.index,
        endOffset: match.index + match[0].length,
        confidence: 0.8,
      },
    });
  }

  return detections;
}

/**
 * Extract pain score from text (0-10)
 */
export function detectPainScore(text: string): number | undefined {
  const painMatch = text.match(/pain[:\s]+(\d+)/i);
  if (painMatch) {
    const score = parseInt(painMatch[1], 10);
    return Math.min(10, Math.max(0, score));
  }
  return undefined;
}

/**
 * Extract adequacy score from text (0-10)
 */
export function detectAdequacyScore(text: string): number | undefined {
  const adequacyMatch = text.match(/adequacy[:\s]+(\d+)/i);
  if (adequacyMatch) {
    const score = parseInt(adequacyMatch[1], 10);
    return Math.min(10, Math.max(0, score));
  }
  return undefined;
}
