import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className="Menu">
      <div className="d-xl-flex align-items-center d-none">
        <NavLink to="/models" className="link">
          Model S
        </NavLink>
        <NavLink to="/models" className="link">
          Model 3
        </NavLink>
        <NavLink to="/models" className="link">
          Model X
        </NavLink>
        <NavLink to="/models" className="link">
          Model Y
        </NavLink>
        <NavLink to="/models" className="link">
          Solar Roof
        </NavLink>
        <NavLink to="/models" className="link">
          Solar Panels
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
