import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import UserLayout from "@/components/layouts/UserLayout";
import AdminLayout from "@/components/layouts/AdminLayout";
import Home from "@/pages/user/Home";
import About from "@/pages/user/About";
import Contact from "@/pages/user/Contact";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import type { UserRole } from "@/types/user";
import { Unauthorized } from "@/pages/unauthorized/Unauthorized";
import { NotFound } from "@/pages/notFound/NotFound";
import { withSuspense } from "@/utils/withSuspense";


const user: { role: UserRole | null } = {
  role: "user", // or "admin"
};

// Suspense wrapper
// const withSuspense = (element: JSX.Element) => (
//   <Suspense fallback={<SuspenseFallback />}>{element}</Suspense>
// );

// Browser router configuration
export const router = createBrowserRouter([
  // User Routes with UserLayout
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { index: true, element: withSuspense(<Home />) },
      { path: "about", element: withSuspense(<About />) },
      { path: "contact", element: withSuspense(<Contact />) },
    ],
  },

  // Admin Routes with AdminLayout + Protected

  {
    path: "/admin",
    element: withSuspense(
      <ProtectedRoute userRole={user.role} allowedRoles={["admin"]}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: withSuspense(<AdminDashboard />) },
      // Add more nested admin routes here
    ],
  },

  // Unauthorized Page

  {
    path: "/unauthorized",
    element: withSuspense(<Unauthorized />),
  },

  // 404 Not Found Page

  {
    path: "*",
    element: withSuspense(<NotFound />),
  },
]);
