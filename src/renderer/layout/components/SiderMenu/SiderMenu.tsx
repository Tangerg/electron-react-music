import React from "react";
import "./SiderMenu.less";
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined
} from "@ant-design/icons/lib";
import { Item, ItemGroup } from "../../../components/Menu";

interface IMenuGroup {
  title: string;
  menuList: IMenuList[];
}
interface IMenuList {
  path: string;
  icon: any;
  title: string;
}
const menuList: IMenuList[] = [
  {
    path: "/",
    icon: <HomeOutlined />,
    title: "根路径"
  },
  {
    path: "/find",
    icon: <HomeOutlined />,
    title: "发现音乐"
  },
  {
    path: "/fm",
    icon: <SettingFilled spin />,
    title: "私人fm"
  },
  {
    path: "/video",
    icon: <SmileOutlined rotate={180} />,
    title: "视频"
  },
  {
    path: "/friends",
    icon: <SyncOutlined />,
    title: "朋友"
  }
];
const menuGroupList: IMenuGroup[] = [
  {
    title: "推荐",
    menuList
  },
  {
    title: "我的音乐",
    menuList
  }
];
function SiderMenu() {
  return (
    <div>
      <div className="content">
        {menuGroupList.map(menuGroup => {
          return (
            <ItemGroup key={menuGroup.title} title={menuGroup.title}>
              {menuGroup.menuList.map(menu => {
                return (
                  <Item key={menu.path} path={menu.path}>
                    {menu.icon}
                    {menu.title}
                  </Item>
                );
              })}
            </ItemGroup>
          );
        })}
      </div>
    </div>
  );
}
export default SiderMenu;
