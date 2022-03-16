import React from "react";

function ItemText({ title, desc }) {
  return (
    <div className="itemText">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}

export default ItemText;
