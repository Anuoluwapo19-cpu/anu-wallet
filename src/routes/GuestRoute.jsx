import useAuth from '../hooks/useAuth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const GuestRoute = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <p>Checking your session...</p>;
  if (user) return <Navigate to={location.state?.from ?? '/'} replace />;

  return <Outlet />;
};

export default GuestRoute;
