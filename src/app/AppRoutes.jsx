import { lazy, Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout';

const Login = lazy(() => import('../pages/Login/Login'));
const Signup = lazy(() => import('../pages/Signup/Signup'));

const AppRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route>
          <Route element={<AuthLayout />}>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
