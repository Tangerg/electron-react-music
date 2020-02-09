import React from "react";

interface IItemGroup {
  title: string;
  children?: React.ReactNode;
}
function ItemGroup(props: IItemGroup) {
  const { title, children } = props;
  return (
    <div>
      <div>{title}</div>
      {children}
    </div>
  );
}

export default ItemGroup;
