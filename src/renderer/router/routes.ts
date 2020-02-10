import { lazy } from "react";
import discoverRoutes from "./modules/discover";
import privateRoutes from "./modules/private";

export interface IRouteMeta {
  title: string;
  icon?: string;
}
export interface IRoute {
  path: string;
  components?: any;
  redirect?: string;
  meta: IRouteMeta;
  children?: IRoute[];
  sider?: boolean;
  exact?: boolean;
}

const routes: IRoute[] = [
  {
    path: "/",
    components: lazy(() => import("layout/BasicLayout")),
    meta: {
      title: "音乐"
    },
    redirect: "/discover"
  },
  ...discoverRoutes,
  ...privateRoutes
];
export default routes;
