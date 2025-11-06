/**
 * Dexie database schema for local-first storage
 */

import Dexie, { type Table } from 'dexie';
import type {
  Project,
  Transcript,
  Quote,
  Code,
  Category,
  CodeCategoryAssignment,
  QuoteCodeLink,
  Relationship,
  ParserProfile,
  Action,
} from '../types/domain';

export class ACSDatabase extends Dexie {
  projects!: Table<Project>;
  transcripts!: Table<Transcript>;
  quotes!: Table<Quote>;
  codes!: Table<Code>;
  categories!: Table<Category>;
  codeCategoryAssignments!: Table<CodeCategoryAssignment>;
  quoteCodeLinks!: Table<QuoteCodeLink>;
  relationships!: Table<Relationship>;
  parserProfiles!: Table<ParserProfile>;
  actions!: Table<Action>;

  constructor() {
    super('ACSDatabase');

    // Define schema version 1
    this.version(1).stores({
      projects: 'id, createdAt, updatedAt',
      transcripts: 'id, projectId, frozen, createdAt',
      quotes: 'id, projectId, transcriptId, confidence, createdAt',
      codes: 'id, projectId, label, createdAt, updatedAt',
      categories: 'id, projectId, name, order, createdAt',
      codeCategoryAssignments: 'id, projectId, codeId, categoryId, assignedAt',
      quoteCodeLinks: 'id, projectId, quoteId, codeId, createdAt',
      relationships: 'id, projectId, fromCategoryId, toCategoryId, createdAt',
      parserProfiles: 'id, projectId, name, isDefault, createdAt',
      actions: 'id, projectId, type, timestamp',
    });
  }
}

export const db = new ACSDatabase();
