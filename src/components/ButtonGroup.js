import React from "react";

function ButtonGroup({ leftBtn, rightBtn }) {
  return (
    <div className="buttonGroup d-flex justify-content-center align-items-center flex-column flex-md-row mb-4">
      <div className="buttonLeft buttonStyle d-flex justify-content-center align-items-center">
        {leftBtn}
      </div>
      {rightBtn && (
        <div className="buttonRight buttonStyle d-flex justify-content-center align-items-center">
          {rightBtn}
        </div>
      )}
    </div>
  );
}

export default ButtonGroup;
