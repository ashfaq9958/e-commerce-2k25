import type { RouteObject } from "react-router-dom";
import AdminLayout from "@/components/layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";
import { AdminDashboard } from "./lazyPages";
import type { UserRole } from "@/types/user";
import { withSuspense } from "@/utils/withSuspense";

const user: { role: UserRole | null } = {
  role: "user", // or "admin"
};

export const adminRoutes: RouteObject = {
  path: "/admin",
  element: withSuspense(
    <ProtectedRoute userRole={user.role} allowedRoles={["admin"]}>
      <AdminLayout />
    </ProtectedRoute>
  ),
  children: [{ index: true, element: withSuspense(<AdminDashboard />) }],
};
