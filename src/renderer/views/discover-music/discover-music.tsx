import React from "react";
import renderRoutes from "myRouter/utils";

interface IDiscoverMusicProps {
  children?: any;
  routes: any[];
}
function DiscoverMusic(props: IDiscoverMusicProps) {
  const { children, routes } = props;
  console.log(routes);
  return (
    <div>
      <div>发现音乐</div>
      <div>{renderRoutes(routes)}</div>
    </div>
  );
}

export default DiscoverMusic;
