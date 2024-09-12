import React, { useState } from "react";
import { Breadcrumb, Layout } from "antd";
import { Outlet } from "react-router-dom";
import MainMenu from "@/components/MainMenu";

const { Header, Content, Footer, Sider } = Layout;
// import routes from "@/router";

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="site-layout" style={{ minHeight: "100vh" }}>
      {/* 左边栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <MainMenu />
      </Sider>
      {/* 右边container */}
      <Layout>
        {/* 右侧头部 */}
        <Header
          className="site-layout-background"
          style={{ padding: "0 0 0 16px" }}
        >
          {/* 面包屑 */}
          <Breadcrumb
            style={{ lineHeight: "64px" }}
            items={[{ title: "User" }, { title: "Bill" }]}
          />
        </Header>
        {/* 右边内容 */}
        <Content
          style={{ margin: "16px 16px 0" }}
          className="site-layout-background"
        >
          {/* 窗口部位 */}
          {/* {outlet} */}
          <Outlet />
        </Content>
        {/* 右边底部 */}
        <Footer style={{ textAlign: "center", padding: 0, lineHeight: "48px" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default View;
