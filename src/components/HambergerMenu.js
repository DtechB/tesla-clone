import React from "react";
import { NavLink } from "react-router-dom";

function HambergerMenu() {
  return (
    <div className="HambergerMenu">
      <div className="d-xl-flex d-none">
        <NavLink to="/models" className="link">
          Shop
        </NavLink>
        <NavLink to="/models" className="link">
          Account
        </NavLink>
      </div>
      <NavLink to="/models" className="link">
        Menu
      </NavLink>
    </div>
  );
}

export default HambergerMenu;
