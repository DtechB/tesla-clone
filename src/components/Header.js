import React, { useState } from "react";
import HambergerMenu from "./HambergerMenu";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuModal from "./MenuModal";
import configureStore from "../store/configureStore";
import { selectCars } from "../store/car";

function Header() {
  const [menuShow, setMenuShow] = useState(false);
  const store = configureStore();
  const cars = selectCars(store.getState());

  return (
    <div className="header">
      <Logo />
      <Menu data={cars} />
      <HambergerMenu onPress={setMenuShow} />
      <MenuModal onPress={setMenuShow} show={menuShow} />
    </div>
  );
}

export default Header;
