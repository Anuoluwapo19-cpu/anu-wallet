import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout';

const Login = lazy(() => import('../pages/Login/Login'));

const AppRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route>
          <Route element={<AuthLayout />}>
            <Route path='/login' element={<Login />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
