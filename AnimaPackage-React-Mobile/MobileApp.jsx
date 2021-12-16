// import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LandingPageMobile from "./components/LandingPageMobile";

function MobileApp() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|landing-page-mobile)">
          <LandingPageMobile {...landingPageMobileData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default MobileApp;
const group317Data = {
    getStarted: "Get started",
};

const component2Data = {
    username: "@username",
    username2: "@username",
    username3: "@username",
    username4: "@username",
    username5: "@username",
};

const component1Data = {
    shareYourArt: "Share your art",
    postYourContentTo: "Post your content to your followers’ feed and the global discover page.",
    discoverACommunity: "Discover a Community",
    getInspiredByYour: "Get inspired by your favorite creators’ content on your feed and the global discover page.",
    profitOffYourArt: "Profit off your art",
    sellYourContentAs: "Sell your content as NFTs and create an individualized creator coin to sell.",
    investInArt: "Invest in art",
    investInOtherCrea: "Invest in other creators’ coins and content. Buy and sell coins and content to make money.",
};

const union3Data = {
    src: "/img/union@2x.svg",
};

const group318Data = {
    getStarted: "Get started",
};

const group319Data = {
    signUpForOurNewsletter: "Sign up for our newsletter",
};

const group270Data = {
    enterEmail: "Enter email",
    group53: "/img/group-53@2x.svg",
};

const landingPageMobileData = {
    asset174X81: "/img/asset-17-4x-8-1@2x.png",
    title: "Your content.",
    recognized: "Recognized.",
    fosteringACommunit: <>Fostering a community of digital art within the domain <br />of blockchain.</>,
    huesOfTheOpal: "Hues of the Opal",
    expressCreativity: <>Express creativity. Grow your community. Monetize your art. <br />Be yourself.</>,
    asset174X82: "/img/asset-17-4x-8-2@2x.png",
    comingSoon: "(COMING SOON)",
    about: "About",
    company: "Company",
    resources: "Resources",
    newsletter: "Newsletter",
    terms: "Terms",
    privacy: "Privacy",
    copyright: "© 2021 Opal LLC.",
    group317Props: group317Data,
    component2Props: component2Data,
    component1Props: component1Data,
    union3Props: union3Data,
    group318Props: group318Data,
    group319Props: group319Data,
    group270Props: group270Data,
};

