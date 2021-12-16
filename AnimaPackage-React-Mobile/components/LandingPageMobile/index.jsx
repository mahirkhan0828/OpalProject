import React from "react";
import Group317 from "../Group317";
import Component2 from "../Component2";
import Component1 from "../Component1";
import Union3 from "../Union3";
import Group318 from "../Group318";
import Group319 from "../Group319";
import Group270 from "../Group270";
import "./LandingPageMobile.css";

function LandingPageMobile(props) {
  const {
    asset174X81,
    title,
    recognized,
    fosteringACommunit,
    huesOfTheOpal,
    expressCreativity,
    asset174X82,
    comingSoon,
    about,
    company,
    resources,
    newsletter,
    terms,
    privacy,
    copyright,
    group317Props,
    component2Props,
    component1Props,
    union3Props,
    group318Props,
    group319Props,
    group270Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="landing-page-mobile screen">
        <div className="overlap-group6">
          <img className="ellipse-59" src="/img/ellipse-59@1x.svg" />
          <img className="ellipse-60" src="/img/ellipse-60@1x.svg" />
          <img className="asset-174x-8-1" src={asset174X81} />
          <h1 className="title trap-semi-bold-eerie-black-35px">{title}</h1>
          <div className="overlap-group">
            <div className="recognized trap-semi-bold-eerie-black-35px">{recognized}</div>
          </div>
          <div className="fostering-a-communit">{fosteringACommunit}</div>
          <Group317 getStarted={group317Props.getStarted} />
          <Component2
            username={component2Props.username}
            username2={component2Props.username2}
            username3={component2Props.username3}
            username4={component2Props.username4}
            username5={component2Props.username5}
          />
        </div>
        <div className="overlap-group7">
          <div className="hues-of-the-opal">{huesOfTheOpal}</div>
          <div className="overlap-group8">
            <img className="be-yourself" src="/img/be-yourself-@2x.svg" />
            <div className="express-creativity">{expressCreativity}</div>
          </div>
          <Component1 {...component1Props} />
          <Union3 src={union3Props.src} />
          <Group318 getStarted={group318Props.getStarted} />
        </div>
        <img className="asset-174x-8-2" src={asset174X82} />
        <img className="group-66" src="/img/group-66@2x.svg" />
        <div className="coming-soon">{comingSoon}</div>
        <Group319 signUpForOurNewsletter={group319Props.signUpForOurNewsletter} />
        <Group270 enterEmail={group270Props.enterEmail} group53={group270Props.group53} />
        <div className="about switzer-regular-normal-mountain-mist-16px">{about}</div>
        <div className="company switzer-regular-normal-mountain-mist-16px">{company}</div>
        <div className="resources switzer-regular-normal-mountain-mist-16px">{resources}</div>
        <div className="newsletter switzer-regular-normal-mountain-mist-16px">{newsletter}</div>
        <div className="terms switzer-regular-normal-mountain-mist-16px">{terms}</div>
        <div className="privacy switzer-regular-normal-mountain-mist-16px">{privacy}</div>
        <div className="copyright switzer-regular-normal-mountain-mist-16px">{copyright}</div>
      </div>
    </div>
  );
}

export default LandingPageMobile;
