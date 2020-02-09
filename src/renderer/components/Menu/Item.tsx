import React from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

interface IItemProps {
  path: string;
  children?: React.ReactNode;
}
function Item(props: IItemProps) {
  const { path, children } = props;
  return (
    <NavLink to={path}>
      <div className={classnames("menu-item", "menu-item-active")}>
        {children}
      </div>
    </NavLink>
  );
}

export default Item;
