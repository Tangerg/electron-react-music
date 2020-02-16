import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { IRoute } from "./index";

function renderRoute(route: IRoute) {
  const { component: Component } = route;
  return (
    <Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      render={props => (
        <Component {...props} routes={route.children ? route.children : null} />
      )}
    />
  );
}

function renderRedirect(route: IRoute) {
  return (
    <Redirect
      key={route.path}
      path={route.path}
      to={route.redirect ? route.redirect : "/404"}
      push
    />
  );
}

function renderRouteMap(routes: IRoute[]): Object {
  const result: React.ReactNode[] = [];
  const redirect: React.ReactNode[] = [];
  routes.forEach(route => {
    if (route.redirect) {
      redirect.push(renderRedirect(route));
    } else {
      result.push(renderRoute(route));
    }
  });

  return [...result, ...redirect];
}
function renderRoutes(routes: IRoute[]) {
  return (
    <div>
      <Switch>{renderRouteMap(routes)}</Switch>
    </div>
  );
}
export default renderRoutes;
