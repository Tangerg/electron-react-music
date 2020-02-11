import React, { useState, memo } from "react";

interface ISubMenuProps {
  title: string;
  children?: React.ReactNode;
}
function SubMenu(props: ISubMenuProps) {
  const { title, children } = props;
  const [collapse, setCollapse] = useState(false);
  const showChildren = () => {
    if (collapse) {
      return <div>{children}</div>;
    }
    return null;
  };
  const clickSubMenu = () => {
    setCollapse(!collapse);
    console.log("asd");
  };
  return (
    <div>
      <div onClick={clickSubMenu}>{title}</div>
      {showChildren()}
    </div>
  );
}

export default memo(SubMenu);
