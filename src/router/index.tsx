import { Navigate } from "react-router-dom";
import React, { lazy } from "react";
import About from "@/views/About";
import Home from "@/views/Home";
const User = lazy(() => import("@/views/User"));

const withLoadingComponent = (children: JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>{children}</React.Suspense>
);

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  // 懒加载需要在组件外部套一层
  {
    path: "/user",
    element: withLoadingComponent(<User />),
  },
];

export default routes;
