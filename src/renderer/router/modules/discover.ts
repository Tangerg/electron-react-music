import { lazy } from "react";
import { IRoute } from "../index";

const discoverRoutes: IRoute[] = [
  {
    path: "/discover",
    meta: {
      title: "发现音乐",
      icon: "ant-play"
    },
    sider: true,
    redirect: "/discover/recommend",
    component: lazy(() => import("views/discover-music")),
    children: [
      {
        path: "/discover",
        redirect: "/discover/recommend",
        component: lazy(() =>
          import("views/discover-music/components/recommend")
        )
      },
      {
        path: "/discover/recommend",
        meta: {
          title: "个性推荐"
        },
        exact: true,
        component: lazy(() =>
          import("views/discover-music/components/recommend")
        )
      },
      {
        path: "/discover/playlist",
        meta: {
          title: "歌单"
        },
        component: lazy(() =>
          import("views/discover-music/components/playlist")
        )
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
        },
        component: lazy(() => import("views/discover-music/components/rank"))
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
