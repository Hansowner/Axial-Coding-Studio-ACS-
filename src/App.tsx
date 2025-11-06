import { Route, Routes } from 'react-router-dom';
import { appRoutes } from './routes';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col">
        <Routes>
          {appRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
    </div>
  );
};

export default App;
