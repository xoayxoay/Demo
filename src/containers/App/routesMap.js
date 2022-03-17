import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage';

import r from './routes';

export default [
  {
    exact: true,
    path: r.HOME,
    component: HomePage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];
