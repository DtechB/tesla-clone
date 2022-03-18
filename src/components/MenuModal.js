import React from "react";
import { NavLink } from "react-router-dom";
import { X } from "react-bootstrap-icons";
import Styled from "styled-components";

function MenuModal({ onPress, show }) {
  const showing = {
    transform: `${show ? "translateX(0)" : "translateX(100%)"}`,
  };

  return (
    <div className="MenuModal" style={showing}>
      <CloseBtn>
        <X color="black" size={30} onClick={() => onPress(false)} />
      </CloseBtn>
      <NavLink to="/existing-inventory" className="link">
        Existing Inventory
      </NavLink>
      <NavLink to="/used-inventory" className="link">
        Used Inventory
      </NavLink>
      <NavLink to="/trade-in" className="link">
        Trade-In
      </NavLink>
      <NavLink to="/test-drive" className="link">
        Test Drive
      </NavLink>
      <NavLink to="/cybertruck" className="link">
        Cybertruck
      </NavLink>
      <NavLink to="/roadster" className="link">
        Roadster
      </NavLink>
      <NavLink to="/semi" className="link">
        Semi
      </NavLink>
      <NavLink to="/charging" className="link">
        Charging
      </NavLink>
      <NavLink to="/powerwall" className="link">
        Powerwall
      </NavLink>
      <NavLink to="/commerical-energy" className="link">
        Commerical Energy
      </NavLink>
      <NavLink to="/utilities" className="link">
        Utilities
      </NavLink>
      <NavLink to="/find-us" className="link">
        Find us
      </NavLink>
    </div>
  );
}

export default MenuModal;

const CloseBtn = Styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    margin: 0 0 25px 0;
`;
