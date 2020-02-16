import React from "react";

import { renderRoutes } from "myRouter/index";
import "./RenderView.less";

interface IRenderViewProps {
  children?: any;
  routes: any[];
}
function RenderView(props: IRenderViewProps) {
  const { routes } = props;
  console.log(routes);
  return <div className="RenderView">{renderRoutes(routes)}</div>;
}
export default RenderView;
