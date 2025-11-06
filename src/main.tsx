import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/index.css';
import { runMigrations } from './db/migrations';

// Initialize database
runMigrations().catch((error) => {
  console.error('Failed to initialize database:', error);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
