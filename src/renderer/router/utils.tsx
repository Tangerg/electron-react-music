import React from "react";
import { Route, Redirect } from "react-router-dom";
import { IRoute } from "./index";

export default function renderRouteConfig(routes: IRoute[]): any {
  const result = [];
  if (!routes || !routes.length) {
    return null;
  }
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    if (route.redirect) {
      result.push(
        <Redirect
          key={route.path}
          to={route.redirect ? route.redirect : "/404"}
          from={route.path}
        />
      );
    }
    if (route.children) {
      result.push(
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
        >
          {renderRouteConfig(route.children as IRoute[])}
        </Route>
      );
    } else {
      result.push(
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      );
    }
  }
  return result;
}
