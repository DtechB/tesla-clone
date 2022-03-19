import React from "react";
import { NavLink } from "react-router-dom";

function Menu({ data }) {
  return (
    <div className="Menu">
      <div className="d-xl-flex align-items-center d-none">
        {data.map((item) => (
          <NavLink
            key={item}
            to={`/${item.replace(" ", "-").toLowerCase()}`}
            className="link"
          >
            {item}
          </NavLink>
        ))}
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
