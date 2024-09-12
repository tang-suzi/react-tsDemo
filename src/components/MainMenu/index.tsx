import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

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

const MainMenu = () => {
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
    <Menu
      theme="dark"
      defaultSelectedKeys={["/page1"]}
      mode="inline"
      items={items}
      onOpenChange={onOpenChange}
      openKeys={stateOpenKeys}
      onClick={menuClick}
    />
  );
};

export default MainMenu;
