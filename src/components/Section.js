import React from "react";
import styled from "styled-components";
import "../App.css";
import ButtonGroup from "./ButtonGroup";
import ItemText from "./ItemText";

function Section({ title, desc, imageUrl, leftBtn, rightBtn }) {
  return (
    <div
      className="section d-flex flex-column justify-content-between"
      style={{ backgroundImage: `url("/images/${imageUrl}")` }}
    >
      <ItemText title={title} desc={desc} />
      <Footer>
        <ButtonGroup leftBtn={leftBtn} rightBtn={rightBtn} />
        <DownArrow src="/images/down-arrow.svg" alt="" />
      </Footer>
    </div>
  );
}

export default Section;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
  owerflow: hidden;
`;

const Footer = styled.div`
  text-align: center;
  owerflow: hidden;
`;
