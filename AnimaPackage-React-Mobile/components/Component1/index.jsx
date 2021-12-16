import React from "react";
import "./Component1.css";

function Component1(props) {
  const {
    shareYourArt,
    postYourContentTo,
    discoverACommunity,
    getInspiredByYour,
    profitOffYourArt,
    sellYourContentAs,
    investInArt,
    investInOtherCrea,
  } = props;

  return (
    <div className="component-1">
      <div className="group-316">
        <img className="group-190" src="/img/group-190@2x.svg" />
        <div className="x-art valign-text-middle switzer-medium-white-25px">{shareYourArt}</div>
        <p className="post-your-content-to switzer-regular-normal-white-16px">{postYourContentTo}</p>
      </div>
      <div className="group-315">
        <img className="group-194" src="/img/group-194@2x.svg" />
        <div className="discover-a-community valign-text-middle switzer-medium-white-25px">{discoverACommunity}</div>
        <p className="get-inspired-by-your switzer-regular-normal-white-16px">{getInspiredByYour}</p>
      </div>
      <div className="group-314">
        <img className="group-196" src="/img/group-196@2x.svg" />
        <div className="profit-off-your-art valign-text-middle switzer-medium-white-25px">{profitOffYourArt}</div>
        <p className="sell-your-content-as switzer-regular-normal-white-16px">{sellYourContentAs}</p>
      </div>
      <div className="group-313">
        <div className="overlap-group-2">
          <div className="rectangle-89"></div>
        </div>
        <div className="x-art valign-text-middle switzer-medium-white-25px">{investInArt}</div>
        <p className="invest-in-other-crea switzer-regular-normal-white-16px">{investInOtherCrea}</p>
      </div>
    </div>
  );
}

export default Component1;
