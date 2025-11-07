import { describe, it, expect } from 'vitest';
import { generateId, hashString, deterministicId } from '../src/lib/id';

describe('ID utilities', () => {
  describe('hashString', () => {
    it('should hash string deterministically', () => {
      const input = 'test-string-123';
      const hash1 = hashString(input);
      const hash2 = hashString(input);

      expect(hash1).toBe(hash2);
      expect(typeof hash1).toBe('number');
    });

    it('should produce different hashes for different strings', () => {
      const hash1 = hashString('string-one');
      const hash2 = hashString('string-two');

      expect(hash1).not.toBe(hash2);
    });

    it('should produce consistent hashes across multiple calls', () => {
      const input = 'consistency-test';
      const hashes = Array.from({ length: 10 }, () => hashString(input));

      // All hashes should be identical
      expect(new Set(hashes).size).toBe(1);
    });

    it('should produce positive integer hashes', () => {
      const hash = hashString('positive-test');

      expect(hash).toBeGreaterThan(0);
      expect(Number.isInteger(hash)).toBe(true);
    });
  });

  describe('deterministicId', () => {
    it('should generate deterministic IDs from same content', () => {
      const content = 'test-content';
      const prefix = 'code';

      const id1 = deterministicId(content, prefix);
      const id2 = deterministicId(content, prefix);

      expect(id1).toBe(id2);
      expect(id1).toContain(prefix);
    });

    it('should generate different IDs for different content', () => {
      const id1 = deterministicId('content-one', 'code');
      const id2 = deterministicId('content-two', 'code');

      expect(id1).not.toBe(id2);
    });

    it('should include prefix in generated ID', () => {
      const id = deterministicId('test', 'proj');

      expect(id).toMatch(/^proj_/);
    });

    it('should work without prefix', () => {
      const id1 = deterministicId('test');
      const id2 = deterministicId('test');

      expect(id1).toBe(id2);
      expect(typeof id1).toBe('string');
    });

    it('should generate consistent IDs across multiple calls', () => {
      const content = 'consistency-test';
      const prefix = 'cat';
      const ids = Array.from({ length: 10 }, () => deterministicId(content, prefix));

      // All IDs should be identical
      expect(new Set(ids).size).toBe(1);
    });
  });

  describe('generateId', () => {
    it('should generate unique IDs', () => {
      const id1 = generateId();
      const id2 = generateId();

      expect(id1).not.toBe(id2);
    });

    it('should include prefix when provided', () => {
      const id = generateId('test');

      expect(id).toMatch(/^test_/);
    });

    it('should generate IDs without prefix', () => {
      const id = generateId();

      expect(typeof id).toBe('string');
      expect(id.length).toBeGreaterThan(0);
    });

    it('should generate different IDs with same prefix', () => {
      const id1 = generateId('proj');
      const id2 = generateId('proj');

      expect(id1).not.toBe(id2);
      expect(id1).toMatch(/^proj_/);
      expect(id2).toMatch(/^proj_/);
    });
  });
});
