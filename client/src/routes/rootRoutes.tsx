import { Edit, ForeignRepos, Home, OwnRepos, Search } from '../pages';

export const rootRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/repositories',
    element: <OwnRepos />,
  },
  {
    path: '/edit',
    element: <Edit />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/repositories/:user',
    element: <ForeignRepos />,
  },
];
