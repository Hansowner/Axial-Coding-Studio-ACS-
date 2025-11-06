/**
 * Hook for managing local theme preference
 */

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'auto';

export function useLocalTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('acs-theme');
    return (stored as Theme) || 'auto';
  });

  useEffect(() => {
    localStorage.setItem('acs-theme', theme);

    if (theme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', prefersDark);
    } else {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  return { theme, setTheme };
}
