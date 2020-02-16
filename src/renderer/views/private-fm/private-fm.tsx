import React from "react";

interface IDiscoverMusicProps {
  children?: any;
  routes: any[];
}
function PrivateFm(props: IDiscoverMusicProps) {
  const { children, routes } = props;
  console.log(routes);
  return (
    <div>
      <div>私人FM</div>
    </div>
  );
}

export default PrivateFm;
