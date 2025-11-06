/**
 * Database migrations
 * Baseline v1 is defined in schema.ts
 */

import { db } from './schema';

/**
 * Run any pending migrations
 */
export async function runMigrations(): Promise<void> {
  // Future migrations will be added here
  // Example: await db.version(2).stores({ newTable: 'id, ...' });
  await db.open();
}

/**
 * Clear all data (for testing/reset)
 */
export async function clearDatabase(): Promise<void> {
  await db.delete();
  await db.open();
}
