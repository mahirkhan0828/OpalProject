import React from "react";
import "./Group270.css";

function Group270(props) {
  const { enterEmail, group53 } = props;

  return (
    <div className="group-270">
      <div className="enter-email">{enterEmail}</div>
      <img className="group-53" src={group53} />
    </div>
  );
}

export default Group270;
