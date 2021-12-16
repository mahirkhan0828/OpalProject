import React from "react";
import "./LandingPage.css";

function LandingPageDesktop(props) {
  const {
    signUp,
    comingSoon,
    comingSoon2,
    rectangle141,
    rectangle142,
    rectangle135,
    rectangle138,
    rectangle139,
    rectangle140,
    username,
    username2,
    username3,
    username4,
    username5,
    asset174X81,
    fosteringACommunit,
    title,
    monetized,
    huesOfTheOpal,
    expressCreativity,
    shareYourArt,
    discoverACommunity,
    postYourContentTo,
    getInspiredByYour,
    profitOffYourArt,
    investInArt,
    sellYourContentAs,
    investInOtherCrea,
    getStarted,
    asset174X82,
    comingSoon3,
    signUpForOurNewsletter,
    enterEmail,
    about,
    company,
    resources,
    newsletter,
    terms,
    privacy,
    copyright,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="landing-page screen">
        <div className="overlap-group13">
          <img className="ellipse-59" src="/img/ellipse-59@1x.svg" />
          <img className="ellipse-60" src="/img/ellipse-60@1x.svg" />
          <div className="overlap-group">
            <div className="sign-up">{signUp}</div>
          </div>
          <div className="overlap-group1">
            <div className="coming-soon">{comingSoon}</div>
          </div>
          <div className="overlap-group2">
            <div className="coming-soon-1">{comingSoon2}</div>
            <img className="group-51" src="/img/group-51@2x.svg" />
          </div>
          <div className="group-container">
            <div className="group-201">
              <div className="overlap-group-1">
                <img className="rectangle-141" src={rectangle141} />
                <img className="rectangle-142" src={rectangle142} />
              </div>
              <div className="overlap-group1-1">
                <img className="rectangle-135" src={rectangle135} />
                <img className="rectangle-138" src={rectangle138} />
              </div>
              <div className="overlap-group2-1">
                <img className="rectangle-139" src={rectangle139} />
                <img className="rectangle-140" src={rectangle140} />
              </div>
            </div>
            <div className="overlap-group3">
              <div className="username switzer-medium-black-16px">{username}</div>
            </div>
            <div className="overlap-group4">
              <div className="username switzer-medium-black-16px">{username2}</div>
            </div>
            <div className="overlap-group5">
              <div className="username switzer-medium-black-16px">{username3}</div>
            </div>
            <div className="overlap-group6">
              <div className="username switzer-medium-black-16px">{username4}</div>
            </div>
            <div className="overlap-group7">
              <div className="username switzer-medium-black-16px">{username5}</div>
            </div>
          </div>
          <img className="asset-174x-8-1" src={asset174X81} />
          <div className="fostering-a-communit">{fosteringACommunit}</div>
          <div className="group-290">
            <h1 className="title trap-semi-bold-eerie-black-70px">{title}</h1>
            <div className="overlap-group-2">
              <div className="monetized trap-semi-bold-eerie-black-70px">{monetized}</div>
            </div>
          </div>
        </div>
        <div className="overlap-group12">
          <div className="flex-row">
            <img className="group-19" src="/img/group-190@2x.svg" />
            <div className="flex-col">
              <div className="hues-of-the-opal">{huesOfTheOpal}</div>
              <div className="overlap-group9">
                <div className="express-creativity switzer-medium-white-30px">{expressCreativity}</div>
                <img className="be-yourself" src="/img/be-yourself-@2x.svg" />
              </div>
              <img className="group-194" src="/img/group-194@2x.svg" />
            </div>
          </div>
          <div className="flex-row-1 switzer-normal-white-50px">
            <div className="share-your-art valign-text-middle">{shareYourArt}</div>
            <div className="discover-a-community">{discoverACommunity}</div>
          </div>
          <div className="your-container switzer-regular-normal-white-25px">
            <div className="x-your-content">{postYourContentTo}</div>
            <div className="get-inspired-by-your">{getInspiredByYour}</div>
          </div>
          <div className="group-container-1">
            <img className="group-19" src="/img/group-196@2x.svg" />
            <div className="overlap-group10">
              <div className="rectangle-89"></div>
            </div>
          </div>
          <div className="art-container switzer-normal-white-50px">
            <div className="profit-off-your-art valign-text-middle">{profitOffYourArt}</div>
            <div className="invest-in-art">{investInArt}</div>
          </div>
          <div className="flex-row-2 switzer-regular-normal-white-25px">
            <div className="x-your-content">{sellYourContentAs}</div>
            <div className="invest-in-other-crea">{investInOtherCrea}</div>
          </div>
          <img className="union" src="/img/union@2x.svg" />
          <div className="overlap-group11">
            <div className="get-started switzer-medium-white-30px">{getStarted}</div>
            <img className="group-210" src="/img/group-210@2x.svg" />
          </div>
        </div>
        <div className="group-300">
          <div className="flex-col-1">
            <img className="asset-174x-8-2" src={asset174X82} />
            <img className="group-66" src="/img/group-66@2x.svg" />
          </div>
          <div className="flex-col-2">
            <div className="flex-row-3">
              <div className="flex-col-3">
                <div className="coming-soon-2 switzer-regular-normal-mountain-mist-14px">{comingSoon3}</div>
                <div className="sign-up-for-our-newsletter">{signUpForOurNewsletter}</div>
              </div>
              <img className="group-271" src="/img/group-271@2x.svg" />
            </div>
            <div className="overlap-group-3">
              <div className="enter-email">{enterEmail}</div>
              <img className="group-53" src="/img/group-53@2x.svg" />
            </div>
            <div className="group-268 switzer-regular-normal-mountain-mist-14px">
              <div className="about">{about}</div>
              <div className="company">{company}</div>
              <div className="resources">{resources}</div>
              <div className="newsletter">{newsletter}</div>
              <div className="terms">{terms}</div>
              <div className="privacy">{privacy}</div>
            </div>
            <div className="copyright switzer-regular-normal-mountain-mist-14px">{copyright}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageDesktop;
