import React, { useState } from "react";
import HambergerMenu from "./HambergerMenu";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuModal from "./MenuModal";

function Header() {
  const [menuShow, setMenuShow] = useState(false);
  return (
    <div className="header">
      <Logo />
      <Menu />
      <HambergerMenu onPress={setMenuShow} />
      <MenuModal onPress={setMenuShow} show={menuShow} />
    </div>
  );
}

export default Header;
