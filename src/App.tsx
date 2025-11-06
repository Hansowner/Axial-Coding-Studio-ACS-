import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { routes } from './routes';

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg text-text">
        {/* Skip to main content link for accessibility */}
        <a href="#main" className="skip-link">
          Skip to main content
        </a>

        {/* Navigation */}
        <nav className="border-b border-border bg-bg-secondary">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-6">
              <h1 className="text-xl font-bold">ACS</h1>
              <div className="flex gap-4 flex-wrap">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    className="text-sm hover:text-primary focus-ring rounded px-2 py-1"
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main id="main" className="container mx-auto">
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>

        {/* Footer */}
        <footer className="border-t border-border mt-8 py-4 text-center text-sm text-text-muted">
          <p>Axial Coding Studio - Local-first qualitative analysis</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
