import { Navigate, createBrowserRouter } from 'react-router-dom';
import { PrivateRoute } from '../hoc';
import { Dashboard } from '../layouts';
import { rootRoutes } from './rootRoutes';

export const Router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
      children: rootRoutes,
    },
    {
      path: '404',
      element: <></>,
    },
    {
      path: '*',
      element: <Navigate to="/404" />,
    },
  ],
  { basename: '/app' },
);
