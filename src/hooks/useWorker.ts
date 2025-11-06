/**
 * Hook for managing Web Worker communication
 */

import { useRef, useCallback, useEffect } from 'react';
import type { WorkerRequest, WorkerResponse } from '../types/messages';

export function useWorker<T = unknown>(workerFactory: () => Worker) {
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    workerRef.current = workerFactory();

    return () => {
      workerRef.current?.terminate();
    };
  }, [workerFactory]);

  const sendMessage = useCallback(
    (request: WorkerRequest): Promise<T> => {
      return new Promise((resolve, reject) => {
        if (!workerRef.current) {
          reject(new Error('Worker not initialized'));
          return;
        }

        const handleMessage = (e: MessageEvent<WorkerResponse>) => {
          const response = e.data;

          if (response.type === 'error') {
            reject(new Error(response.error.message));
          } else {
            resolve(response.payload as T);
          }

          workerRef.current?.removeEventListener('message', handleMessage);
        };

        workerRef.current.addEventListener('message', handleMessage);
        workerRef.current.postMessage(request);
      });
    },
    []
  );

  return { sendMessage };
}
