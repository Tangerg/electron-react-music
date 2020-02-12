import React from "react";
import "./RenderView.less";
import { Switch, Route } from "react-router-dom";
import Discover from "views/discover-music";

interface IRenderViewProps {
  children?: any;
}
function RenderView(props: IRenderViewProps) {
  const { children } = props;
  return (
    <div className="RenderView">
      <Switch>
        <Route path="/discover" component={Discover} />
      </Switch>
    </div>
  );
}
export default RenderView;
