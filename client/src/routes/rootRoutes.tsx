import { Edit, Home, OwnRepos, ForeignRepos, Search } from '../pages';

export const rootRoutes = [
  {
    path: '/app/',
    element: <Home />,
  },
  {
    path: '/app/repositories',
    element: <OwnRepos />,
  },
  {
    path: '/app/edit',
    element: <Edit />,
  },
  {
    path: '/app/search',
    element: <Search />,
  },
  {
    path: '/app/repositories/:user',
    element: <ForeignRepos />,
  },
];
