import { describe, expect, it } from 'vitest';
import { appRoutePaths, appRoutes } from '../routes';

describe('appRoutes', () => {
  it('exposes stub metadata for all axial coding studio screens', () => {
    expect(appRoutes).toMatchInlineSnapshot(`
      [
        {
          "description": "Landing area for summarizing coding activity and recent updates.",
          "element": <StubPage
            description="Landing area for summarizing coding activity and recent updates."
            title="Project Overview"
          />,
          "path": "/",
          "title": "Project Overview",
        },
        {
          "description": "Workspace for consolidating open coding sessions into a unified dataset.",
          "element": <StubPage
            description="Workspace for consolidating open coding sessions into a unified dataset."
            title="Merge Sessions"
          />,
          "path": "/merge",
          "title": "Merge Sessions",
        },
        {
          "description": "Primary environment for linking concepts, categories, and relationships.",
          "element": <StubPage
            description="Primary environment for linking concepts, categories, and relationships."
            title="Axial Coding Workspace"
          />,
          "path": "/axial",
          "title": "Axial Coding Workspace",
        },
        {
          "description": "Matrix showing the coverage of codes across transcripts and sources.",
          "element": <StubPage
            description="Matrix showing the coverage of codes across transcripts and sources."
            title="Coverage Matrix"
          />,
          "path": "/matrices/coverage",
          "title": "Coverage Matrix",
        },
        {
          "description": "Visualise how often codes appear together in your qualitative data.",
          "element": <StubPage
            description="Visualise how often codes appear together in your qualitative data."
            title="Co-occurrence Matrix"
          />,
          "path": "/matrices/cooccurrence",
          "title": "Co-occurrence Matrix",
        },
        {
          "description": "Graph-based exploration of relationships between codes and categories.",
          "element": <StubPage
            description="Graph-based exploration of relationships between codes and categories."
            title="Network Graph"
          />,
          "path": "/network",
          "title": "Network Graph",
        },
        {
          "description": "Tools for documenting hypotheses and theoretical memos between codes.",
          "element": <StubPage
            description="Tools for documenting hypotheses and theoretical memos between codes."
            title="Relationship Mapping"
          />,
          "path": "/relationships",
          "title": "Relationship Mapping",
        },
        {
          "description": "Quantitative summaries of coding progress, agreement, and distribution.",
          "element": <StubPage
            description="Quantitative summaries of coding progress, agreement, and distribution."
            title="Metrics Dashboard"
          />,
          "path": "/metrics",
          "title": "Metrics Dashboard",
        },
        {
          "description": "Export coded data, matrices, and visualisations for sharing or analysis.",
          "element": <StubPage
            description="Export coded data, matrices, and visualisations for sharing or analysis."
            title="Export Center"
          />,
          "path": "/export",
          "title": "Export Center",
        },
      ]
    `);
  });

  it('lists route paths in navigation order', () => {
    expect(appRoutePaths).toEqual([
      '/',
      '/merge',
      '/axial',
      '/matrices/coverage',
      '/matrices/cooccurrence',
      '/network',
      '/relationships',
      '/metrics',
      '/export',
    ]);
  });
});
