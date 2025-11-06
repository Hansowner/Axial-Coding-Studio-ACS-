/**
 * Selectors for derived state and metrics
 */

import { db } from '../db/schema';
import type { CategoryMetrics, QualityGate } from '../types/domain';
import { mean, percentage } from '../lib/math';

/**
 * Calculate metrics for a category
 */
export async function getCategoryMetrics(
  projectId: string,
  categoryId: string
): Promise<CategoryMetrics | null> {
  const category = await db.categories.get(categoryId);
  if (!category) return null;

  // Get all codes in this category
  const assignments = await db.codeCategoryAssignments
    .where(['projectId', 'categoryId'])
    .equals([projectId, categoryId])
    .toArray();

  const codeIds = assignments.map((a) => a.codeId);

  // Get all quote links for these codes
  const links = await db.quoteCodeLinks
    .where('projectId')
    .equals(projectId)
    .filter((link) => codeIds.includes(link.codeId))
    .toArray();

  const quoteIds = [...new Set(links.map((l) => l.quoteId))];

  // Get quotes
  const quotes = await db.quotes.bulkGet(quoteIds);
  const validQuotes = quotes.filter((q) => q !== undefined);

  // Calculate metrics
  const totalQuotes = await db.quotes.where('projectId').equals(projectId).count();
  const painScores = validQuotes.map((q) => q.painScore ?? 0);
  const adequacyScores = validQuotes.map((q) => q.adequacyScore ?? 0);
  const inadequateCount = adequacyScores.filter((s) => s < 5).length;

  return {
    categoryId,
    categoryName: category.name,
    coveragePercent: percentage(quoteIds.length, totalQuotes),
    avgPainScore: mean(painScores),
    avgAdequacyScore: mean(adequacyScores),
    inadequacyPercent: percentage(inadequateCount, adequacyScores.length),
    codeCount: codeIds.length,
    quoteCount: quoteIds.length,
  };
}

/**
 * Calculate quality gate status for project
 */
export async function getQualityGate(projectId: string): Promise<QualityGate> {
  const categories = await db.categories.where('projectId').equals(projectId).toArray();

  const metricsPromises = categories.map((cat) => getCategoryMetrics(projectId, cat.id));
  const metrics = (await Promise.all(metricsPromises)).filter((m) => m !== null);

  const hasCoverageTheme = metrics.some((m) => m!.coveragePercent >= 40);
  const hasHighPainTheme = metrics.some((m) => m!.avgPainScore > 7);
  const hasInadequacyTheme = metrics.some((m) => m!.inadequacyPercent >= 50);

  return {
    hasCoverageTheme,
    hasHighPainTheme,
    hasInadequacyTheme,
    passed: hasCoverageTheme && hasHighPainTheme && hasInadequacyTheme,
  };
}

/**
 * Get all metrics for all categories in project
 */
export async function getAllCategoryMetrics(projectId: string): Promise<CategoryMetrics[]> {
  const categories = await db.categories.where('projectId').equals(projectId).toArray();

  const metricsPromises = categories.map((cat) => getCategoryMetrics(projectId, cat.id));
  const metrics = await Promise.all(metricsPromises);

  return metrics.filter((m) => m !== null) as CategoryMetrics[];
}
