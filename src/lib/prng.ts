/**
 * Seeded Pseudo-Random Number Generator (PRNG)
 * Ensures deterministic behavior: same seed → same sequence
 * Uses Mulberry32 algorithm for good distribution
 */

/**
 * Creates a seeded random number generator
 * @param seed - Integer seed value
 * @returns Function that returns random number in [0, 1)
 */
export function createPRNG(seed: number): () => number {
  let state = seed;
  return function () {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Generates a random integer in [min, max] using seeded RNG
 */
export function randomInt(rng: () => number, min: number, max: number): number {
  return Math.floor(rng() * (max - min + 1)) + min;
}

/**
 * Shuffles an array in place using Fisher-Yates algorithm with seeded RNG
 * @param array - Array to shuffle
 * @param rng - Seeded random number generator
 * @returns The same array, shuffled
 */
export function shuffle<T>(array: T[], rng: () => number): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Samples k items from array without replacement using seeded RNG
 */
export function sample<T>(array: T[], k: number, rng: () => number): T[] {
  const shuffled = shuffle([...array], rng);
  return shuffled.slice(0, Math.min(k, array.length));
}

/**
 * Returns a random choice from array using seeded RNG
 */
export function choice<T>(array: T[], rng: () => number): T {
  return array[Math.floor(rng() * array.length)];
}
