import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/HomePage";
import RegisterPage from "@/pages/RegisterPage";
import RootErrorBoundary from "@/pages/RootErrorBoundary";
import { createBrowserRouter } from "react-router";

import type { RouteObject } from "react-router";

const rootRouteChildren: RouteObject[] = [
  {
    index: true,
    element: <HomePage />, 
  },
  {
    path: "register",
    element: <RegisterPage />,
  },

];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RootErrorBoundary />,
    children: rootRouteChildren,
  }
])

export default router;