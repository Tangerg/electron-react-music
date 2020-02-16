import React from "react";
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined
} from "@ant-design/icons/lib";

export interface IMenuItem {
  title: string;
  path: string;
  icon: any;
}
export interface IMenuGroup {
  title: string;
  menuList: IMenuItem[];
}
const RECOMEND_MENULIST: IMenuItem[] = [
  {
    path: "/discover",
    icon: <HomeOutlined />,
    title: "发现音乐"
  },
  {
    path: "/private",
    icon: <HomeOutlined />,
    title: "私人FM"
  },
  {
    path: "/video",
    icon: <SettingFilled />,
    title: "视频"
  },
  {
    path: "/friends",
    icon: <SmileOutlined rotate={180} />,
    title: "朋友"
  }
];
const MY_MUSIC_MENULIST: IMenuItem[] = [
  {
    path: "/local",
    icon: <HomeOutlined />,
    title: "本地音乐"
  },
  {
    path: "/download",
    icon: <HomeOutlined />,
    title: "下载管理"
  },
  {
    path: "/yunpan",
    icon: <SettingFilled />,
    title: "我的音乐云盘"
  },
  {
    path: "/radio",
    icon: <SmileOutlined rotate={180} />,
    title: "我的电台"
  },
  {
    path: "/collection",
    icon: <SmileOutlined rotate={180} />,
    title: "我的收藏"
  }
];
const SIDER_MENU_GROUP_DEFAULT: IMenuGroup[] = [
  {
    title: "推荐",
    menuList: RECOMEND_MENULIST
  },
  {
    title: "我的音乐",
    menuList: MY_MUSIC_MENULIST
  }
];
const SIDER_MENU_GROUP_ASYNC: IMenuGroup[] = [
  {
    title: "创建的歌单",
    menuList: [
      {
        path: "/playlist/3",
        icon: <SmileOutlined rotate={180} />,
        title: "我喜欢的音乐"
      }
    ]
  },
  {
    title: "收藏的歌单",
    menuList: []
  }
];
export { SIDER_MENU_GROUP_DEFAULT, SIDER_MENU_GROUP_ASYNC };
