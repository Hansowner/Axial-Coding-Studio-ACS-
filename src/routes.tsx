import type { ReactElement } from 'react';
import { StubPage } from './features/layout/StubPage';

export type AppRoute = {
  path: string;
  title: string;
  description: string;
  element: ReactElement;
};

type RouteMetadata = Omit<AppRoute, 'element'>;

const stubRouteMetadata: RouteMetadata[] = [
  {
    path: '/',
    title: 'Project Overview',
    description: 'Landing area for summarizing coding activity and recent updates.',
  },
  {
    path: '/merge',
    title: 'Merge Sessions',
    description: 'Workspace for consolidating open coding sessions into a unified dataset.',
  },
  {
    path: '/axial',
    title: 'Axial Coding Workspace',
    description: 'Primary environment for linking concepts, categories, and relationships.',
  },
  {
    path: '/matrices/coverage',
    title: 'Coverage Matrix',
    description: 'Matrix showing the coverage of codes across transcripts and sources.',
  },
  {
    path: '/matrices/cooccurrence',
    title: 'Co-occurrence Matrix',
    description: 'Visualise how often codes appear together in your qualitative data.',
  },
  {
    path: '/network',
    title: 'Network Graph',
    description: 'Graph-based exploration of relationships between codes and categories.',
  },
  {
    path: '/relationships',
    title: 'Relationship Mapping',
    description: 'Tools for documenting hypotheses and theoretical memos between codes.',
  },
  {
    path: '/metrics',
    title: 'Metrics Dashboard',
    description: 'Quantitative summaries of coding progress, agreement, and distribution.',
  },
  {
    path: '/export',
    title: 'Export Center',
    description: 'Export coded data, matrices, and visualisations for sharing or analysis.',
  },
];

export const appRoutes: AppRoute[] = stubRouteMetadata.map(({ path, title, description }) => ({
  path,
  title,
  description,
  element: <StubPage title={title} description={description} />,
}));

export const appRoutePaths = appRoutes.map((route) => route.path);
