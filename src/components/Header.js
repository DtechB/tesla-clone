import React from "react";
import HambergerMenu from "./HambergerMenu";
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  return (
    <div className="header">
      <Logo />
      <Menu />
      <HambergerMenu />
    </div>
  );
}

export default Header;
