// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes, { IRoute } from "./routes";

function handleRoutes(routesList: IRoute[]): any {
  const result = [];
  for (let i = 0; i < routesList.length; i++) {
    const route: IRoute = routesList[i];
    if (route.children) {
      result.push(...handleRoutes(route.children));
    }
    result.push(route.path);
  }
  return result;
}
function siderRoutes(routesList: IRoute[]): any {
  const result = [];
  for (let i = 0; i < routesList.length; i++) {
    const route: IRoute = routesList[i];
    if (route.sider) {
      const meta = {
        title: route.meta.title,
        icon: route.meta.icon ? route.meta.icon : null
      };
      result.push(meta);
    }
    if (route.children) {
      result.push(...siderRoutes(route.children));
    }
  }
  return result;
}
interface Iobj {
  main: string[];
  sider: string[];
}
const obj: Iobj = {
  main: [],
  sider: []
};
obj.main = handleRoutes(routes);
obj.sider = siderRoutes(routes);

export default obj;
