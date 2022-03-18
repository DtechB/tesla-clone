import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className="Menu">
      <div className="d-xl-flex align-items-center d-none">
        <NavLink to="/model-s" className="link">
          Model S
        </NavLink>
        <NavLink to="/model-3" className="link">
          Model 3
        </NavLink>
        <NavLink to="/model-x" className="link">
          Model X
        </NavLink>
        <NavLink to="/model-y" className="link">
          Model Y
        </NavLink>
        <NavLink to="/solar-roof" className="link">
          Solar Roof
        </NavLink>
        <NavLink to="/solar-panels" className="link">
          Solar Panels
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
