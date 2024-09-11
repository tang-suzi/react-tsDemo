// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// // 样式初始化一半放在最前面
// import "reset-css";
// // UI框架的样式
// // 全局样式
// import "@/assets/style/global.scss";
// // 组件的样式
// import App from "./App";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// oldRouter
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// // 样式初始化一半放在最前面
// import "reset-css";
// // UI框架的样式
// // 全局样式
// import "@/assets/style/global.scss";
// // 组件的样式
// // import App from "./App";
// import Router from '@/router'

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <Router />
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// 样式初始化一半放在最前面
import "reset-css";
// UI框架的样式
// 全局样式
import "@/assets/style/global.scss";
// 组件的样式
import App from "./App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
