/**
 * Export and import functionality for projects
 */

import { db } from './schema';
import { toCSV, downloadCSV } from '../lib/csv';

/**
 * Export project as JSON bundle
 */
export async function exportProjectJSON(projectId: string): Promise<string> {
  const project = await db.projects.get(projectId);
  if (!project) throw new Error('Project not found');

  const [
    transcripts,
    quotes,
    codes,
    categories,
    assignments,
    links,
    relationships,
    profiles,
    actions,
  ] = await Promise.all([
    db.transcripts.where('projectId').equals(projectId).toArray(),
    db.quotes.where('projectId').equals(projectId).toArray(),
    db.codes.where('projectId').equals(projectId).toArray(),
    db.categories.where('projectId').equals(projectId).toArray(),
    db.codeCategoryAssignments.where('projectId').equals(projectId).toArray(),
    db.quoteCodeLinks.where('projectId').equals(projectId).toArray(),
    db.relationships.where('projectId').equals(projectId).toArray(),
    db.parserProfiles.where('projectId').equals(projectId).toArray(),
    db.actions.where('projectId').equals(projectId).toArray(),
  ]);

  const bundle = {
    version: '1.0',
    exportedAt: new Date().toISOString(),
    project,
    transcripts,
    quotes,
    codes,
    categories,
    codeCategoryAssignments: assignments,
    quoteCodeLinks: links,
    relationships,
    parserProfiles: profiles,
    actions,
  };

  return JSON.stringify(bundle, null, 2);
}

/**
 * Import project from JSON bundle
 */
export async function importProjectJSON(jsonString: string): Promise<string> {
  const bundle = JSON.parse(jsonString);

  // Validate bundle structure
  if (!bundle.project || !bundle.version) {
    throw new Error('Invalid project bundle');
  }

  const projectId = bundle.project.id;

  // Import all data
  await db.transaction(
    'rw',
    [
      db.projects,
      db.transcripts,
      db.quotes,
      db.codes,
      db.categories,
      db.codeCategoryAssignments,
      db.quoteCodeLinks,
      db.relationships,
      db.parserProfiles,
      db.actions,
    ],
    async () => {
      await db.projects.add(bundle.project);
      if (bundle.transcripts) await db.transcripts.bulkAdd(bundle.transcripts);
      if (bundle.quotes) await db.quotes.bulkAdd(bundle.quotes);
      if (bundle.codes) await db.codes.bulkAdd(bundle.codes);
      if (bundle.categories) await db.categories.bulkAdd(bundle.categories);
      if (bundle.codeCategoryAssignments)
        await db.codeCategoryAssignments.bulkAdd(bundle.codeCategoryAssignments);
      if (bundle.quoteCodeLinks) await db.quoteCodeLinks.bulkAdd(bundle.quoteCodeLinks);
      if (bundle.relationships) await db.relationships.bulkAdd(bundle.relationships);
      if (bundle.parserProfiles) await db.parserProfiles.bulkAdd(bundle.parserProfiles);
      if (bundle.actions) await db.actions.bulkAdd(bundle.actions);
    }
  );

  return projectId;
}

/**
 * Export quotes as CSV
 */
export async function exportQuotesCSV(projectId: string): Promise<void> {
  const quotes = await db.quotes.where('projectId').equals(projectId).toArray();
  const csv = toCSV(quotes as unknown as Record<string, unknown>[]);
  downloadCSV(`quotes_${projectId}.csv`, csv);
}

/**
 * Export codes and their categories as CSV
 */
export async function exportCodesCSV(projectId: string): Promise<void> {
  const codes = await db.codes.where('projectId').equals(projectId).toArray();
  const csv = toCSV(codes as unknown as Record<string, unknown>[]);
  downloadCSV(`codes_${projectId}.csv`, csv);
}

/**
 * Export category metrics as CSV (stub)
 */
export async function exportCategoryMetricsCSV(projectId: string): Promise<void> {
  // TODO: Implement metrics calculation
  const csv = 'categoryId,name,coverage,avgPain,inadequacy\n';
  downloadCSV(`metrics_${projectId}.csv`, csv);
}
