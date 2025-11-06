import { describe, expect, it } from 'vitest';
import { appRoutes } from '../routes';

const expectedPaths = [
  '/',
  '/merge',
  '/axial',
  '/matrices/coverage',
  '/matrices/cooccurrence',
  '/network',
  '/relationships',
  '/metrics',
  '/export',
];

describe('appRoutes', () => {
  it('defines stub routes for the axial coding studio', () => {
    expect(appRoutes.map((route) => route.path)).toEqual(expectedPaths);
  });
});
