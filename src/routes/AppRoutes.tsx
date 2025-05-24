import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { LoadingSpinner } from 'src/components';
import AppRouter from './routes';

function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={AppRouter()} />
    </Suspense>
  );
}

export default AppRoutes;
