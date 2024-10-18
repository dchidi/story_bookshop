import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Lazy load components
const Home = lazy(() => import("../pages/Home"));
const MyStories = lazy(() => import("../pages/MyStories"));
const Login = lazy(() => import("../pages/Login"));
const Orders = lazy(() => import("../pages/Orders"));
const PublicLayout = lazy(() => import("../layouts/PublicLayout"));
const DashboardLayout = lazy(() => import("../layouts/DashboardLayout"));
const Error404 = lazy(() => import("../pages/Error404"));
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));

const MainRoute: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>

          {/* Protected Dashboard Routes */}
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<MyStories />} />
            <Route path="my-stories" element={<MyStories />} />
            <Route path="orders" element={<Orders />} />
          </Route>

          {/* Catch-all Route for 404 */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default MainRoute;
