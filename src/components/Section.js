import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

import "../App.css";
import ButtonGroup from "./ButtonGroup";
import ItemText from "./ItemText";

function Section({ title, desc, imageUrl, leftBtn, rightBtn }) {
  return (
    <div
      className="section d-flex flex-column justify-content-between"
      style={{ backgroundImage: `url("/images/${imageUrl}")` }}
    >
      <Fade bottom>
        <ItemText title={title} desc={desc} />
      </Fade>
      <Footer>
        <Fade bottom>
          <ButtonGroup leftBtn={leftBtn} rightBtn={rightBtn} />
        </Fade>
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
