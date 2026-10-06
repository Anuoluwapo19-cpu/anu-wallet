import { lazy, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import ProtectedRoute from "../routes/ProtectedRoute";
import GuestRoute from "../routes/GuestRoute";

const Login = lazy(() => import("../pages/Login/Login"));
const Signup = lazy(() => import("../pages/Signup/Signup"));

const AppRoutes = () => {
  return (
    <Suspense>
      <Routes>
        {/* Only for logout users or new users */}
        <Route element={<GuestRoute />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Route>

        {/* Logged */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<div>Welcome Home</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
