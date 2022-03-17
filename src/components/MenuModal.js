import React from "react";
import { NavLink } from "react-router-dom";
import { X } from "react-bootstrap-icons";
import Styled from "styled-components";

function MenuModal({ onPress }) {
  return (
    <div className="MenuModal">
      <CloseBtn>
        <X color="black" size={30} onClick={() => onPress(false)} />
      </CloseBtn>
      <NavLink to="/models" className="link">
        Existing Inventory
      </NavLink>
      <NavLink to="/models" className="link">
        Used Inventory
      </NavLink>
      <NavLink to="/models" className="link">
        Trade-In
      </NavLink>
      <NavLink to="/models" className="link">
        Test Drive
      </NavLink>
      <NavLink to="/models" className="link">
        Cybertruck
      </NavLink>
      <NavLink to="/models" className="link">
        Roadster
      </NavLink>
      <NavLink to="/models" className="link">
        Semi
      </NavLink>
      <NavLink to="/models" className="link">
        Charging
      </NavLink>
      <NavLink to="/models" className="link">
        Powerwall
      </NavLink>
      <NavLink to="/models" className="link">
        Commerical Energy
      </NavLink>
      <NavLink to="/models" className="link">
        Utilities
      </NavLink>
      <NavLink to="/models" className="link">
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
