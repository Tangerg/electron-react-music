import { lazy } from "react";
import BasicLayout from "layout/BasicLayout";
import { IRoute } from "./index";
import discoverRoutes from "./modules/discover";
import privateRoutes from "./modules/private";

const routes: IRoute[] = [
  {
    path: "/",
    component: BasicLayout,
    meta: {
      title: "蓝眼音乐"
    },
    // redirect: "/discover"
  },
  ...discoverRoutes,
  ...privateRoutes,
  {
    path: "/404",
    component: lazy(() => import("layout/BasicLayout")),
    meta: {
      title: "音乐"
    }
  }
];
export default routes;
