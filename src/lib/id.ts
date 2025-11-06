/**
 * ID generation and hashing utilities
 */

import { nanoid } from 'nanoid';

/**
 * Generates a unique ID with optional prefix
 * @param prefix - Optional prefix (e.g., 'proj', 'code', 'cat')
 * @returns Unique identifier string
 */
export function generateId(prefix?: string): string {
  const id = nanoid();
  return prefix ? `${prefix}_${id}` : id;
}

/**
 * Simple string hash function (djb2)
 * @param str - String to hash
 * @returns 32-bit integer hash
 */
export function hashString(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

/**
 * Generates a deterministic ID based on content
 * @param content - Content to hash
 * @param prefix - Optional prefix
 * @returns Deterministic ID
 */
export function deterministicId(content: string, prefix?: string): string {
  const hash = hashString(content).toString(36);
  return prefix ? `${prefix}_${hash}` : hash;
}
