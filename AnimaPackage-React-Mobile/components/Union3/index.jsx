import React from "react";
import "./Union3.css";

function Union3(props) {
  const { src } = props;

  return <div className="union" style={{ backgroundImage: `url(${src})` }}></div>;
}

export default Union3;
