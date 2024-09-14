// import { useState } from "react";
// import { Button } from "antd";
// import { StepBackwardOutlined } from "@ant-design/icons";

// oldRouter
// import { Link, Outlet } from "react-router-dom";

// const App: React.FC = () => {
//   return (
//     <div className="App">

//       <Link to={'/home'}>home</Link> |
//       <Link to={'/about'}>about</Link>
//       <Outlet />
//     </div>
//   );
// };

// export default App;

// new Router
import { useRoutes, Link, useLocation, useNavigate } from "react-router-dom";
import router from "./router";
import { useEffect } from "react";
import { message } from "antd";

const ToPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return <></>;
};

const ToLogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    message.warning("请登录");
    navigate("/login");
  }, []);
  return <></>;
};

const BeforeRouterEnter: React.FC = () => {
  const outlet = useRoutes(router);
  const { pathname } = useLocation();

  /**
   * 如果访问的是登陆页面并且有token，跳转到首页
   * 如果访问的不是登陆页，并且没有token，跳转到登陆页
   */
  const token = localStorage.getItem("ccc-token");
  if (pathname === "/login" && token) {
    return <ToPage />;
  }
  if (pathname !== "/login" && !token) {
    return <ToLogin />;
  }
  return outlet;
};

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Link to="/home">home</Link> |
      <Link to="/about">about</Link> |
      <Link to="/user">user</Link> */}
      <BeforeRouterEnter />
    </div>
  );
};

export default App;
