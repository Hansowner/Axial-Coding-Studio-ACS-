/**
 * Action creators and reducers for state mutations
 * All mutations must be pure functions and log reversible actions
 */

import type { Action, ActionType, Category } from '../types/domain';
import { generateId } from '../lib/id';

/**
 * Creates an action object
 */
export function createAction(
  projectId: string,
  type: ActionType,
  payload: unknown
): Action {
  return {
    id: generateId('act'),
    projectId,
    type,
    payload,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Freeze transcript action
 */
export interface FreezeTranscriptPayload {
  transcriptId: string;
  quoteIds: string[];
}

/**
 * Merge codes action
 */
export interface MergeCodePayload {
  sourceCodeIds: string[];
  targetCodeId: string;
  rationale: string;
}

/**
 * Rename code action
 */
export interface RenameCodePayload {
  codeId: string;
  oldLabel: string;
  newLabel: string;
}

/**
 * Assign code to category action
 */
export interface AssignCodePayload {
  codeId: string;
  categoryId: string;
}

/**
 * Create category action
 */
export interface CreateCategoryPayload {
  category: Category;
}

/**
 * Create relationship action
 */
export interface CreateRelationshipPayload {
  fromCategoryId: string;
  toCategoryId: string;
  evidenceQuoteIds: string[];
  note?: string;
}

// Reducer functions for each action type
// These would be implemented to actually mutate the database
// For now, they're stubs

export async function applyAction(action: Action): Promise<void> {
  // TODO: Implement actual database mutations based on action type
  console.log('Applying action:', action.type);
}

export async function reverseAction(action: Action): Promise<void> {
  // TODO: Implement action reversal for undo
  console.log('Reversing action:', action.type);
}
