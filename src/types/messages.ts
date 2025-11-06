/**
 * Message types for worker communication
 */

import type { ParserProfile, Provenance } from './domain';

/**
 * Messages sent to workers
 */
export type WorkerRequest = ParseRequest | MetricsRequest;

export interface ParseRequest {
  type: 'parse';
  payload: {
    raw: string;
    profile: ParserProfile;
    seed: number;
  };
}

export interface MetricsRequest {
  type: 'metrics';
  payload: {
    operation: 'coverage' | 'cooccurrence' | 'network';
    data: unknown;
    seed: number;
  };
}

/**
 * Messages received from workers
 */
export type WorkerResponse = ParseResponse | MetricsResponse | WorkerError;

export interface ParseResponse {
  type: 'parse-complete';
  payload: {
    rows: ParsedRow[];
    stats: ParseStats;
  };
}

export interface ParsedRow {
  text: string;
  lineStart: number;
  lineEnd: number;
  speaker?: string;
  painScore?: number;
  adequacyScore?: number;
  confidence: number;
  provenance: Provenance[];
  suggestedCodes: string[];
}

export interface ParseStats {
  totalRows: number;
  highConfidence: number;
  lowConfidence: number;
  avgConfidence: number;
  detectedCodes: number;
  rulesApplied: number;
}

export interface MetricsResponse {
  type: 'metrics-complete';
  payload: {
    result: unknown; // Typed per operation
  };
}

export interface WorkerError {
  type: 'error';
  error: {
    message: string;
    stack?: string;
  };
}
