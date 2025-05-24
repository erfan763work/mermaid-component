import { lazy } from 'react';
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import ErrorPage from 'src/pages/Error';

const LazyNotFoundPage = lazy(() => import('src/pages/NotFound'));
const LazyHomePage = lazy(() => import('src/pages/Home/Home'));

const AppRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      handle: {
        title: 'BREAD_CRUMBS.PUBLIC',
      },
      element: <LazyHomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/404',
      element: <LazyNotFoundPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '*',
      element: <Navigate to="/404" />,
      errorElement: <ErrorPage />,
    },
  ];

  return createBrowserRouter(routes);
};

export default AppRouter;
