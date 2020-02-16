import { lazy } from "react";
import { IRoute } from "../index";

const privateRoutes: IRoute[] = [
  {
    path: "/private",
    meta: {
      title: "私人FM",
      icon: "ant-private"
    },
    sider: true,
    redirect: "/private/play",
    component: lazy(() => import("views/private-fm")),
    children: [
      {
        path: "/private/play",
        sider: true,
        meta: {
          title: "私人FM播放"
        },
        exact: true,
        component: lazy(() => import("layout/BasicLayout"))
      }
    ]
  }
];
export default privateRoutes;
