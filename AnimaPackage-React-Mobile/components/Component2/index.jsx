import React from "react";
import "./Component2.css";

function Component2(props) {
  const { username, username2, username3, username4, username5 } = props;

  return (
    <div className="component-2">
      <div className="group-container">
        <div className="group-274">
          <img className="rectangle-140" src="/img/rectangle-140@2x.svg" />
          <div className="overlap-group-1">
            <div className="rectangle-21"></div>
            <div className="username switzer-medium-black-16px">{username}</div>
          </div>
        </div>
        <div className="group-309">
          <div className="overlap-group1">
            <div className="username-1 switzer-medium-black-16px">{username2}</div>
          </div>
        </div>
        <div className="overlap-group2">
          <div className="rectangle-21-1"></div>
          <div className="username-2 switzer-medium-black-16px">{username3}</div>
        </div>
        <div className="overlap-group3">
          <div className="rectangle-21-2"></div>
          <div className="username-3 switzer-medium-black-16px">{username4}</div>
        </div>
        <div className="overlap-group4">
          <div className="rectangle-21-3"></div>
          <div className="username-4 switzer-medium-black-16px">{username5}</div>
        </div>
      </div>
    </div>
  );
}

export default Component2;
