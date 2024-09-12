import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
// import routes from "@/router";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "/page1", <PieChartOutlined />),
  getItem("Option 2", "/page2", <DesktopOutlined />),
  getItem("User", "page3", <UserOutlined />, [
    getItem("Tom", "/home"),
    getItem("Bill", "/about"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "page4", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [stateOpenKeys, setStateOpenKeys] = useState(["page3"]);
  const navgateTo = useNavigate();
  // const outlet = useRoutes(routes);
  const menuClick = (e: { key: string }) => {
    console.log(e.key);
    // 编程式路由跳转 用到hook useNavigate
    navgateTo(e.key);
  };
  const onOpenChange: MenuProps["onOpenChange"] = (openKeys: string[]) => {
    // openKeys记录了是哪一项展开的
    setStateOpenKeys([openKeys[openKeys.length - 1]]);
  };
  return (
    <Layout className="site-layout" style={{ minHeight: "100vh" }}>
      {/* 左边栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["/page1"]}
          mode="inline"
          items={items}
          onOpenChange={onOpenChange}
          openKeys={stateOpenKeys}
          onClick={menuClick}
        />
      </Sider>
      {/* 右边container */}
      <Layout>
        {/* 右侧头部 */}
        <Header
          className="site-layout-background"
          style={{ padding: "0 0 0 16px" }}
        >
          {/* 面包屑 */}
          <Breadcrumb style={{ lineHeight: "64px" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
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
