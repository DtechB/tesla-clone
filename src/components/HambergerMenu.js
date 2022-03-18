import React from "react";
import { NavLink } from "react-router-dom";

function HambergerMenu({ onPress }) {
  return (
    <div className="HambergerMenu">
      <div className="d-xl-flex d-none">
        <NavLink to="/shop" className="link">
          Shop
        </NavLink>
        <NavLink to="/account" className="link">
          Account
        </NavLink>
      </div>
      <div
        onClick={() => onPress(true)}
        className="link menuHam"
        style={{ cursor: "pointer" }}
      >
        Menu
      </div>
    </div>
  );
}

export default HambergerMenu;
