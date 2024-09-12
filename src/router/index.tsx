import { Navigate } from "react-router-dom";
import React, { lazy } from "react";
// import About from "@/views/About";
import Login from "@/views/Login";
import Home from "@/views/Home";
// const Home = lazy(() => import("@/views/Home"));
// const User = lazy(() => import("@/views/User"));
const Page1 = lazy(() => import("@/views/Page1"));
const Page2 = lazy(() => import("@/views/Page2"));
const Page301 = lazy(() => import("@/views/Page3/Page301"));
const Page302 = lazy(() => import("@/views/Page3/Page302"));
const Page401 = lazy(() => import("@/views/Page4/Page401"));
const Page402 = lazy(() => import("@/views/Page4/Page402"));
const Page5 = lazy(() => import("@/views/Page5"));
const Page404 = lazy(() => import("@/views/404"));

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
        // 懒加载需要在组件外部套一层
        element: withLoadingComponent(<Page1 />),
      },
      {
        path: "/page2",
        element: withLoadingComponent(<Page2 />),
      },
      {
        path: "/page3/page301",
        element: withLoadingComponent(<Page301 />),
      },
      {
        path: "/page3/page302",
        element: withLoadingComponent(<Page302 />),
      },
      {
        path: "/page4/page401",
        element: withLoadingComponent(<Page401 />),
      },
      {
        path: "/page4/page402",
        element: withLoadingComponent(<Page402 />),
      },
      {
        path: "/page5",
        element: withLoadingComponent(<Page5 />),
      },
      {
        path: "/404",
        element: withLoadingComponent(<Page404 />),
      },
    ],
  },
  {
    path: "/login",
    // 404
    element: <Login />,
  },
  {
    path: "*",
    // 404
    element: <Navigate to={"/404"} />,
  },
];

export default routes;
