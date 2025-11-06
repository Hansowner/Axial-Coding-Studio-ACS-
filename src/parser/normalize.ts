/**
 * Text normalization based on cleaning toggles
 */

import type { CleaningToggles } from '../types/domain';

export function normalizeText(text: string, toggles: CleaningToggles): string {
  let result = text;

  if (toggles.trimWhitespace) {
    result = result.trim();
  }

  if (toggles.normalizeLineBreaks) {
    result = result.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  }

  if (toggles.removeExtraSpaces) {
    result = result.replace(/ +/g, ' ');
  }

  if (toggles.removeEmptyLines) {
    result = result
      .split('\n')
      .filter((line) => line.trim().length > 0)
      .join('\n');
  }

  return result;
}
