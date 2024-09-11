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
import { useRoutes, Link } from "react-router-dom";
import router from "./router";
const App: React.FC = () => {
  const outlet = useRoutes(router);
  return (
    <div className="App">
      <Link to="/home">home</Link> |
      <Link to="/about">about</Link> |
      <Link to="/user">user</Link>
      {outlet}
    </div>
  );
};

export default App;
