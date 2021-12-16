// import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LandingPageDesktop from "./components/LandingPage";


function DesktopApp() {
  
  return (
    <Router>
      <Switch>
        <Route path="/:path(|landing-page)">
          <LandingPageDesktop {...landingPageData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default DesktopApp;
const landingPageData = {
    signUp: "Sign Up",
    comingSoon: "Log In",
    comingSoon2: "Coming Soon",
    rectangle141: "/img/rectangle-141-1@2x.png",
    rectangle142: "/img/rectangle-142-1@2x.png",
    rectangle135: "/img/rectangle-135-1@1x.png",
    rectangle138: "/img/rectangle-138-1@2x.png",
    rectangle139: "/img/rectangle-139-1@2x.png",
    rectangle140: "/img/rectangle-140@2x.png",
    username: "@username",
    username2: "@username",
    username3: "@username",
    username4: "@username",
    username5: "@username",
    asset174X81: "/img/asset-17-4x-8-1@2x.png",
    fosteringACommunit: "Fostering a community of digital art within the domain of blockchain.",
    title: "Your content.",
    monetized: "Monetized.",
    huesOfTheOpal: "Hues of the Opal",
    expressCreativity: "Express creativity. Grow your community. Monetize your art. Be yourself.",
    shareYourArt: "Share your art",
    discoverACommunity: "Discover a community",
    postYourContentTo: "Post your content to your followers’ feed and the global discover page.",
    getInspiredByYour: "Get inspired by your favorite creators’ content on your feed and the global discover page.",
    profitOffYourArt: "Profit off your art",
    investInArt: "Invest in art",
    sellYourContentAs: "Sell your content as NFTs and create an individualized creator coin to sell.",
    investInOtherCrea: "Invest in other creators’ coins and content. Buy and sell coins and content to make money.",
    getStarted: "Get started",
    asset174X82: "/img/asset-17-4x-8-2-1@2x.png",
    comingSoon3: "(COMING SOON)",
    signUpForOurNewsletter: "Sign up for our newsletter",
    enterEmail: "Enter email",
    about: "About",
    company: "Company",
    resources: "Resources",
    newsletter: "Newsletter",
    terms: "Terms",
    privacy: "Privacy",
    copyright: "© 2021 Opal LLC.",
};

