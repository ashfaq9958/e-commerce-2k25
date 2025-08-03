import { createBrowserRouter } from "react-router-dom";
import { withSuspense } from "@/utils/withSuspense";
import { Unauthorized, NotFound } from "./lazyPages";
import { userRoutes } from "./userRoutes";
import { adminRoutes } from "./adminRoutes";

export const router = createBrowserRouter([
  userRoutes,
  adminRoutes,
  {
    path: "/unauthorized",
    element: withSuspense(<Unauthorized />),
  },
  {
    path: "*",
    element: withSuspense(<NotFound />),
  },
]);
