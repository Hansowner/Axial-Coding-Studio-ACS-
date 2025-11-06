import { Home } from './features/home/Home';
import { PasteWizard } from './features/paste-wizard/PasteWizard';
import { MergeLedger } from './features/merge-ledger/MergeLedger';
import { AxialBoard } from './features/axial-board/AxialBoard';
import { CoverageMatrix } from './features/matrices/CoverageMatrix';
import { CooccurrenceMatrix } from './features/matrices/CooccurrenceMatrix';
import { NetworkView } from './features/network/NetworkView';
import { RelationshipBuilder } from './features/relationships/RelationshipBuilder';
import { MetricsPanel } from './features/metrics/MetricsPanel';
import { ExportPanel } from './features/exports/ExportPanel';

export const routes = [
  { path: '/', element: <Home />, label: 'Home' },
  { path: '/paste', element: <PasteWizard />, label: 'Paste Wizard' },
  { path: '/merge', element: <MergeLedger />, label: 'Merge Ledger' },
  { path: '/axial', element: <AxialBoard />, label: 'Axial Board' },
  { path: '/matrices/coverage', element: <CoverageMatrix />, label: 'Coverage Matrix' },
  { path: '/matrices/cooccurrence', element: <CooccurrenceMatrix />, label: 'Co-occurrence Matrix' },
  { path: '/network', element: <NetworkView />, label: 'Network' },
  { path: '/relationships', element: <RelationshipBuilder />, label: 'Relationships' },
  { path: '/metrics', element: <MetricsPanel />, label: 'Metrics' },
  { path: '/export', element: <ExportPanel />, label: 'Export' },
];
