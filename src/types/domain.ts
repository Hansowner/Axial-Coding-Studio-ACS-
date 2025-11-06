/**
 * Core domain types for Axial Coding Studio
 * All types use strict TypeScript with no implicit any
 */

/** Unique identifier with optional prefix */
export type ID = string;

/** ISO 8601 timestamp */
export type Timestamp = string;

/**
 * Project represents a complete axial coding session
 */
export interface Project {
  id: ID;
  name: string;
  seed: number; // Deterministic PRNG seed
  createdAt: Timestamp;
  updatedAt: Timestamp;
  metadata: ProjectMetadata;
}

export interface ProjectMetadata {
  description?: string;
  tags?: string[];
  version: string;
}

/**
 * Transcript is the raw input text with metadata
 */
export interface Transcript {
  id: ID;
  projectId: ID;
  raw: string; // Original unprocessed text
  frozen: boolean; // True after "Freeze v1"
  frozenAt?: Timestamp;
  parserProfileId?: ID;
  createdAt: Timestamp;
}

/**
 * Quote represents a segment of transcript with detected tokens
 */
export interface Quote {
  id: ID;
  projectId: ID;
  transcriptId: ID;
  text: string;
  lineStart: number;
  lineEnd: number;
  speaker?: string;
  painScore?: number; // 0-10 scale
  adequacyScore?: number; // 0-10 scale
  confidence: number; // 0-1 confidence in parsing
  provenance: Provenance[];
  createdAt: Timestamp;
}

/**
 * Code represents a concept/theme extracted from quotes
 */
export interface Code {
  id: ID;
  projectId: ID;
  label: string;
  definition?: string;
  mergedFrom?: ID[]; // IDs of codes merged into this one
  mergedAt?: Timestamp;
  mergeRationale?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

/**
 * Category represents a higher-level grouping (e.g., theme)
 */
export interface Category {
  id: ID;
  projectId: ID;
  name: string;
  description?: string;
  color?: string;
  order: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

/**
 * CodeCategoryAssignment links codes to categories
 */
export interface CodeCategoryAssignment {
  id: ID;
  projectId: ID;
  codeId: ID;
  categoryId: ID;
  assignedAt: Timestamp;
}

/**
 * QuoteCodeLink represents evidence for a code
 */
export interface QuoteCodeLink {
  id: ID;
  projectId: ID;
  quoteId: ID;
  codeId: ID;
  createdAt: Timestamp;
}

/**
 * Relationship between categories (when X then Y)
 */
export interface Relationship {
  id: ID;
  projectId: ID;
  fromCategoryId: ID; // Condition
  toCategoryId: ID; // Consequence
  label?: string;
  note?: string;
  evidenceQuoteIds: ID[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

/**
 * Parser profile defines rules for auto-parsing
 */
export interface ParserProfile {
  id: ID;
  projectId: ID;
  name: string;
  rules: ParserRule[];
  cleaningToggles: CleaningToggles;
  isDefault: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

/**
 * Parser rule for detecting patterns
 */
export interface ParserRule {
  id: ID;
  type: 'quote' | 'code' | 'pain' | 'adequacy' | 'speaker';
  pattern: string; // Regex pattern
  priority: number; // Higher priority rules run first
  enabled: boolean;
  learnedFromExample?: boolean; // True if created via byExample
  createdAt: Timestamp;
}

/**
 * Toggles for text normalization
 */
export interface CleaningToggles {
  trimWhitespace: boolean;
  removeExtraSpaces: boolean;
  normalizeLineBreaks: boolean;
  removeEmptyLines: boolean;
  caseSensitive: boolean;
}

/**
 * Provenance tracks which rule detected which token
 */
export interface Provenance {
  ruleId: ID;
  ruleType: ParserRule['type'];
  match: string;
  startOffset: number;
  endOffset: number;
  confidence: number;
}

/**
 * Action represents a reversible mutation (for undo/redo)
 */
export interface Action {
  id: ID;
  projectId: ID;
  type: ActionType;
  payload: unknown; // Typed per action type
  timestamp: Timestamp;
  userId?: string; // Optional user identifier
}

export type ActionType =
  | 'FREEZE_TRANSCRIPT'
  | 'MERGE_CODE'
  | 'RENAME_CODE'
  | 'ASSIGN_CODE_TO_CATEGORY'
  | 'UNASSIGN_CODE_FROM_CATEGORY'
  | 'CREATE_CATEGORY'
  | 'DELETE_CATEGORY'
  | 'CREATE_RELATIONSHIP'
  | 'DELETE_RELATIONSHIP'
  | 'PARSER_RULE_ADD'
  | 'PARSER_RULE_REMOVE'
  | 'PARSER_RULE_TOGGLE'
  | 'PARSE_OVERRIDE';

/**
 * Metrics computed from the data
 */
export interface CategoryMetrics {
  categoryId: ID;
  categoryName: string;
  coveragePercent: number; // % of quotes linked to codes in this category
  avgPainScore: number;
  avgAdequacyScore: number;
  inadequacyPercent: number; // % of quotes with adequacy < 5
  codeCount: number;
  quoteCount: number;
}

/**
 * Quality gate flags
 */
export interface QualityGate {
  hasCoverageTheme: boolean; // At least 1 theme with ≥40% coverage
  hasHighPainTheme: boolean; // At least 1 theme with avg pain >7
  hasInadequacyTheme: boolean; // At least 1 theme with ≥50% inadequacy
  passed: boolean; // All three flags true
}
