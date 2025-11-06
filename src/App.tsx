import { Route, Routes } from 'react-router-dom';
import { appRoutes } from './routes';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Routes>
        {appRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
