import React from "react";
import Logo from "./Logo";
import History from "./History";
import Search from "./Search";
import User from "./User";
import Theme from "./Theme";
import Control from "./Control";
import "./Header.less";

function Header() {
  return (
    <div className="music-header">
      <Logo />
      <History />
      <Search />
      <User />
      <Theme />
      <Control />
    </div>
  );
}
export default Header;
