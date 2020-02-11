import React from "react";
import Logo from "./components/Logo";
import History from "./components/History";
import Search from "./components/Search";
import User from "./components/User";
import Theme from "./components/Theme";
import Control from "./components/Control";
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
