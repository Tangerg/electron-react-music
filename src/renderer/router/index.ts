import renderRoutes from "./utils";
import routes from "./routes";

export interface IRouteMeta {
  title: string;
  icon?: string;
}
export interface IRoute {
  path: string;
  component?: any;
  redirect?: string;
  meta?: IRouteMeta;
  children?: IRoute[];
  sider?: boolean;
  exact?: boolean;
}

export { renderRoutes };
