/**
 * Parser profile CRUD and defaults
 */

import type { ParserProfile, CleaningToggles } from '../types/domain';
import { generateId } from '../lib/id';

export function createDefaultProfile(projectId: string): ParserProfile {
  return {
    id: generateId('prof'),
    projectId,
    name: 'Default Profile',
    rules: [],
    cleaningToggles: getDefaultCleaningToggles(),
    isDefault: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

export function getDefaultCleaningToggles(): CleaningToggles {
  return {
    trimWhitespace: true,
    removeExtraSpaces: true,
    normalizeLineBreaks: true,
    removeEmptyLines: false,
    caseSensitive: false,
  };
}
