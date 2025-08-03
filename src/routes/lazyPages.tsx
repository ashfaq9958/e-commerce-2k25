// src/routes/lazyPages.tsx
import { lazy } from "react";

// User Pages
export const Home = lazy(() => import("@/pages/user/Home"));
export const About = lazy(() => import("@/pages/user/About"));
export const Contact = lazy(() => import("@/pages/user/Contact"));

// Admin Pages
export const AdminDashboard = lazy(() => import("@/pages/admin/AdminDashboard"));

// Shared Pages
export const Unauthorized = lazy(() => import("@/pages/unauthorized/Unauthorized"));
export const NotFound = lazy(() => import("@/pages/notFound/NotFound"));
