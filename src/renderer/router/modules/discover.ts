import { lazy } from "react";
import { IRoute } from "../routes";

const discoverRoutes: IRoute[] = [
  {
    path: "/discover",
    meta: {
      title: "发现音乐",
      icon: "ant-play"
    },
    sider: true,
    redirect: "/discover/recommend",
    children: [
      {
        path: "/discover/recommend",
        meta: {
          title: "个性推荐"
        },
        components: lazy(() => import("../../layout/BasicLayout"))
      },
      {
        path: "/discover/playlist",
        meta: {
          title: "歌单"
        }
      },
      {
        path: "/discover/dj",
        meta: {
          title: "主播电台"
        }
      },
      {
        path: "/discover/rank",
        meta: {
          title: "排行榜"
        }
      },
      {
        path: "/discover/artist",
        meta: {
          title: "歌手"
        }
      },
      {
        path: "/discover/new-song",
        meta: {
          title: "最新音乐"
        }
      }
    ]
  }
];
export default discoverRoutes;
