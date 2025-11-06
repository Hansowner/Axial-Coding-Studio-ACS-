/**
 * Metrics worker for heavy computations (matrices, network layouts)
 */

import type { WorkerRequest, WorkerResponse } from '../types/messages';

self.onmessage = (e: MessageEvent<WorkerRequest>) => {
  const request = e.data;

  try {
    if (request.type === 'metrics') {
      const { operation } = request.payload;

      let result: unknown;

      switch (operation) {
        case 'coverage':
          // TODO: Compute coverage matrix
          result = { matrix: [] };
          break;
        case 'cooccurrence':
          // TODO: Compute co-occurrence matrix
          result = { matrix: [] };
          break;
        case 'network':
          // TODO: Compute force-directed layout with seeded RNG
          result = { nodes: [], edges: [] };
          break;
        default:
          throw new Error(`Unknown operation: ${operation}`);
      }

      const response: WorkerResponse = {
        type: 'metrics-complete',
        payload: { result },
      };

      self.postMessage(response);
    }
  } catch (error) {
    const errorResponse: WorkerResponse = {
      type: 'error',
      error: {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
      },
    };
    self.postMessage(errorResponse);
  }
};
