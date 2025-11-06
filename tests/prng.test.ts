import { describe, it, expect } from 'vitest';
import { createPRNG, shuffle } from '../src/lib/prng';

describe('PRNG', () => {
  it('should generate deterministic sequence with same seed', () => {
    const rng1 = createPRNG(12345);
    const rng2 = createPRNG(12345);

    const sequence1 = [rng1(), rng1(), rng1()];
    const sequence2 = [rng2(), rng2(), rng2()];

    expect(sequence1).toEqual(sequence2);
  });

  it('should generate different sequences with different seeds', () => {
    const rng1 = createPRNG(12345);
    const rng2 = createPRNG(54321);

    const val1 = rng1();
    const val2 = rng2();

    expect(val1).not.toEqual(val2);
  });

  it('should shuffle array deterministically', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [1, 2, 3, 4, 5];

    const rng1 = createPRNG(999);
    const rng2 = createPRNG(999);

    const shuffled1 = shuffle(arr1, rng1);
    const shuffled2 = shuffle(arr2, rng2);

    expect(shuffled1).toEqual(shuffled2);
  });
});
