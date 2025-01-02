import { createBrowserRouter } from 'react-router-dom';
import { PrivateRoute } from '../hoc';
import { Dashboard } from '../layouts';
import { Login, NotFound } from '../pages';
import { rootRoutes } from './rootRoutes';

export const Router = createBrowserRouter([
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
    path: '/login',
    element: <Login />,
  },
  {
    path: '/404',
    element: <NotFound />,
  },
]);
