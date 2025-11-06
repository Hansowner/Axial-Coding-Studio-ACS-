/**
 * Global state management using Zustand
 */

import { create } from 'zustand';
import type { Project, Action } from '../types/domain';

export interface ProjectState {
  // Current project
  currentProject: Project | null;

  // Action log for undo/redo
  actions: Action[];
  actionIndex: number; // Current position in action history

  // UI state
  isLoading: boolean;
  error: string | null;

  // Actions
  setCurrentProject: (project: Project | null) => void;
  addAction: (action: Action) => void;
  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

const initialState = {
  currentProject: null,
  actions: [],
  actionIndex: -1,
  isLoading: false,
  error: null,
};

export const useProjectStore = create<ProjectState>((set, get) => ({
  ...initialState,

  setCurrentProject: (project) => set({ currentProject: project }),

  addAction: (action) =>
    set((state) => {
      // Truncate actions after current index (branching history)
      const newActions = state.actions.slice(0, state.actionIndex + 1);
      newActions.push(action);
      return {
        actions: newActions,
        actionIndex: newActions.length - 1,
      };
    }),

  undo: () =>
    set((state) => {
      if (state.actionIndex < 0) return state;
      // TODO: Implement actual undo logic by reversing action
      return { actionIndex: state.actionIndex - 1 };
    }),

  redo: () =>
    set((state) => {
      if (state.actionIndex >= state.actions.length - 1) return state;
      // TODO: Implement actual redo logic by reapplying action
      return { actionIndex: state.actionIndex + 1 };
    }),

  canUndo: () => get().actionIndex >= 0,

  canRedo: () => {
    const state = get();
    return state.actionIndex < state.actions.length - 1;
  },

  setLoading: (loading) => set({ isLoading: loading }),

  setError: (error) => set({ error }),

  reset: () => set(initialState),
}));
