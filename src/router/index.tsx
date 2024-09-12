import { Navigate } from "react-router-dom";
import React, { lazy } from "react";
// import About from "@/views/About";
import Home from "@/views/Home";
// const Home = lazy(() => import("@/views/Home"));
// const User = lazy(() => import("@/views/User"));
const Page1 = lazy(() => import("@/views/Page1"));
const Page2 = lazy(() => import("@/views/Page2"));

const withLoadingComponent = (children: JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>{children}</React.Suspense>
);

const routes = [
  {
    path: "/",
    element: <Navigate to="/page1" />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/page1",
        element: withLoadingComponent(<Page1 />),
      },
      {
        path: "/page2",
        element: withLoadingComponent(<Page2 />),
      },
    ],
  },
  // {
  //   path: "/home",
  //   element: <Home />,
  // },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // // 懒加载需要在组件外部套一层
  // {
  //   path: "/user",
  //   element: withLoadingComponent(<User />),
  // },
];

export default routes;
