import { Navigate, createBrowserRouter } from 'react-router-dom';
import { PrivateRoute } from '../hoc';
import { Dashboard } from '../layouts';
import { Login, NotFound } from '../pages';
import { rootRoutes } from './rootRoutes';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/app" />,
  },
  {
    path: '/app',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: rootRoutes,
  },
  {
    path: '/app/login',
    element: <Login />,
  },
  {
    path: '/app/404',
    element: <NotFound />,
  },
  {
    path: '*',
    element: <Navigate to="/app/404" />,
  },
]);
