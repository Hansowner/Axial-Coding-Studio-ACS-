/**
 * Learn rules from user highlights (by example)
 */

import type { ParserRule } from '../types/domain';
import { generateId } from '../lib/id';

/**
 * Create a rule from highlighted example
 */
export function learnRuleFromExample(
  text: string,
  type: ParserRule['type']
): ParserRule {
  // Escape regex special characters
  const escaped = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  return {
    id: generateId('rule'),
    type,
    pattern: escaped,
    priority: 100, // High priority for user-created rules
    enabled: true,
    learnedFromExample: true,
    createdAt: new Date().toISOString(),
  };
}
