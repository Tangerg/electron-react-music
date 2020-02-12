import React from "react";

interface IDiscoverMusicProps {
  children?: any;
}
function DiscoverMusic(props: IDiscoverMusicProps) {
  const { children } = props;
  return (
    <div>
      <div>HELLO</div>
      {children}
    </div>
  );
}

export default DiscoverMusic;
