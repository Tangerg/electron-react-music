import React from "react";

import { Item, ItemGroup, SubMenu } from "components/Menu";
import {
  SIDER_MENU_GROUP_ASYNC,
  SIDER_MENU_GROUP_DEFAULT,
  IMenuItem,
  IMenuGroup
} from "./sider";

import "./SiderMenu.less";

const renderMenuItem = (menulist: IMenuItem[]) => {
  if (menulist && menulist.length) {
    const result = [];
    result.push(
      menulist.map(menuItem => {
        return (
          <Item key={menuItem.path} path={menuItem.path}>
            {menuItem.icon}
            {menuItem.title}
          </Item>
        );
      })
    );
    return result;
  }
  return null;
};
const renderMenuGroup = (menuGroupList: IMenuGroup[]) => {
  if (menuGroupList && menuGroupList.length) {
    const result = [];
    result.push(
      menuGroupList.map(menuGroup => {
        return (
          <ItemGroup key={menuGroup.title} title={menuGroup.title}>
            {renderMenuItem(menuGroup.menuList)}
          </ItemGroup>
        );
      })
    );
    return result;
  }
  return null;
};
const renderMenuGroupAsync = (menuGroupList: IMenuGroup[]) => {
  if (menuGroupList && menuGroupList.length) {
    const result = [];
    result.push(
      menuGroupList.map(menuGroup => {
        return (
          <SubMenu key={menuGroup.title} title={menuGroup.title}>
            {renderMenuItem(menuGroup.menuList)}
          </SubMenu>
        );
      })
    );
    return result;
  }
  return null;
};
function SiderMenu() {
  return (
    <div>
      <div className="content">
        {renderMenuGroup(SIDER_MENU_GROUP_DEFAULT)}
        {renderMenuGroupAsync(SIDER_MENU_GROUP_ASYNC)}
      </div>
    </div>
  );
}
export default SiderMenu;
