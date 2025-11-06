export type AppRoute = {
  path: string;
  title: string;
  description: string;
  element: JSX.Element;
};

const createStubPage = (title: string, description: string): JSX.Element => (
  <section className="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-12">
    <header>
      <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
      <p className="mt-2 text-base text-slate-600">{description}</p>
    </header>
    <p className="text-slate-500">
      This is a placeholder view for the <span className="font-medium text-slate-700">{title}</span> screen. Use this route to
      begin building out the axial coding experience.
    </p>
  </section>
);

export const appRoutes: AppRoute[] = [
  {
    path: '/',
    title: 'Project Overview',
    description: 'Landing area for summarizing coding activity and recent updates.',
    element: createStubPage(
      'Project Overview',
      'Landing area for summarizing coding activity and recent updates.',
    ),
  },
  {
    path: '/merge',
    title: 'Merge Sessions',
    description: 'Workspace for consolidating open coding sessions into a unified dataset.',
    element: createStubPage(
      'Merge Sessions',
      'Workspace for consolidating open coding sessions into a unified dataset.',
    ),
  },
  {
    path: '/axial',
    title: 'Axial Coding Workspace',
    description: 'Primary environment for linking concepts, categories, and relationships.',
    element: createStubPage(
      'Axial Coding Workspace',
      'Primary environment for linking concepts, categories, and relationships.',
    ),
  },
  {
    path: '/matrices/coverage',
    title: 'Coverage Matrix',
    description: 'Matrix showing the coverage of codes across transcripts and sources.',
    element: createStubPage(
      'Coverage Matrix',
      'Matrix showing the coverage of codes across transcripts and sources.',
    ),
  },
  {
    path: '/matrices/cooccurrence',
    title: 'Co-occurrence Matrix',
    description: 'Visualise how often codes appear together in your qualitative data.',
    element: createStubPage(
      'Co-occurrence Matrix',
      'Visualise how often codes appear together in your qualitative data.',
    ),
  },
  {
    path: '/network',
    title: 'Network Graph',
    description: 'Graph-based exploration of relationships between codes and categories.',
    element: createStubPage(
      'Network Graph',
      'Graph-based exploration of relationships between codes and categories.',
    ),
  },
  {
    path: '/relationships',
    title: 'Relationship Mapping',
    description: 'Tools for documenting hypotheses and theoretical memos between codes.',
    element: createStubPage(
      'Relationship Mapping',
      'Tools for documenting hypotheses and theoretical memos between codes.',
    ),
  },
  {
    path: '/metrics',
    title: 'Metrics Dashboard',
    description: 'Quantitative summaries of coding progress, agreement, and distribution.',
    element: createStubPage(
      'Metrics Dashboard',
      'Quantitative summaries of coding progress, agreement, and distribution.',
    ),
  },
  {
    path: '/export',
    title: 'Export Center',
    description: 'Export coded data, matrices, and visualisations for sharing or analysis.',
    element: createStubPage(
      'Export Center',
      'Export coded data, matrices, and visualisations for sharing or analysis.',
    ),
  },
];
