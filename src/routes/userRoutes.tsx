import type { RouteObject } from "react-router-dom";
import UserLayout from "@/components/layouts/UserLayout";
import { Home, About, Contact } from "./lazyPages";
import { withSuspense } from "@/utils/withSuspense";

export const userRoutes: RouteObject = {
  path: "/",
  element: withSuspense(<UserLayout />),
  children: [
    { index: true, element: withSuspense(<Home />) },
    { path: "about", element: withSuspense(<About />) },
    { path: "contact", element: withSuspense(<Contact />) },
  ],
};
