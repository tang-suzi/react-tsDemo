import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[]
// ): MenuItem {
//   return {
//     label,
//     key,
//     icon,
//     children,
//   } as MenuItem;
// }

const items: MenuItem[] = [
  //   getItem("Option 1", "/page1", <PieChartOutlined />),
  //   getItem("Option 2", "/page2", <DesktopOutlined />),
  //   getItem("User", "page3", <UserOutlined />, [
  //     getItem("Tom", "/home"),
  //     getItem("Bill", "/about"),
  //     getItem("Alex", "5"),
  //   ]),
  //   getItem("Team", "page4", <TeamOutlined />, [
  //     getItem("Team 1", "6"),
  //     getItem("Team 2", "8"),
  //   ]),
  //   getItem("Files", "9", <FileOutlined />),
  {
    key: "/page1",
    icon: <PieChartOutlined />,
    label: "Option 1",
  },
  {
    key: "/page2",
    icon: <UserOutlined />,
    label: "Option 2",
  },
  {
    key: "/page3",
    icon: <TeamOutlined />,
    label: "Option 3",
    children: [
      { key: "/page3/page301", label: "Option 3-1" },
      { key: "/page3/page302", label: "Option 3-2" },
    ],
  },
  {
    key: "/page4",
    icon: <FileOutlined />,
    label: "Option 4",
    children: [
      { key: "/page4/page401", label: "Option 4-1" },
      { key: "/page4/page402", label: "Option 4-2" },
    ],
  },
  {
    key: "/page5",
    icon: <DesktopOutlined />,
    label: "Option 5",
  },
];

const MainMenu = () => {
  const location = useLocation();
  const navgateTo = useNavigate();
  let firstOpenKey: string = "";
  const findKey = (obj: { key: string }) => {
    return obj.key === location.pathname;
  };
  for (let i = 0; i < items.length; i++) {
    if (
      items[i]!["children"] &&
      items[i]!["children"].length &&
      items[i]!["children"].find(findKey)
    ) {
      firstOpenKey = items[i]!.key as string;
      break;
    }
  }
  const [stateOpenKeys, setStateOpenKeys] = useState([firstOpenKey]);
  // const outlet = useRoutes(routes);
  const menuClick = (e: { key: string }) => {
    console.log(e);
    // console.log(e.key);
    // 编程式路由跳转 用到hook useNavigate
    navgateTo(e.key);
  };
  const onOpenChange: MenuProps["onOpenChange"] = (openKeys: string[]) => {
    // openKeys记录了是哪一项展开的
    console.log(openKeys);

    setStateOpenKeys([openKeys[openKeys.length - 1]]);
  };
  useEffect(() => {
    // console.log(location);
  }, []);
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[location.pathname]}
      mode="inline"
      items={items}
      onOpenChange={onOpenChange}
      openKeys={stateOpenKeys}
      onClick={menuClick}
    />
  );
};

export default MainMenu;
