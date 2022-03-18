import React from "react";
import { useParams } from "react-router-dom";

function ModelS() {
  const { title } = useParams();
  return <div className="text-center h2 mt-5">{title}</div>;
}

export default ModelS;
