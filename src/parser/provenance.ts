/**
 * Provenance tracking for rule hits
 */

import type { Provenance } from '../types/domain';

/**
 * Merge multiple provenance records
 */
export function mergeProvenance(provenances: Provenance[]): Provenance[] {
  // Remove duplicates by ruleId
  const seen = new Set<string>();
  return provenances.filter((p) => {
    if (seen.has(p.ruleId)) return false;
    seen.add(p.ruleId);
    return true;
  });
}
