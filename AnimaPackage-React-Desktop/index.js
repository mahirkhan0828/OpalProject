import React from "react";
import ReactDOM from "react-dom";
import "./globals.css";
import "./styleguide.css";
import DesktopApp from "./DesktopApp";
import MobileApp from "../AnimaPackage-React-Mobile/MobileApp";

// Check window size and render based on if mobile not
function checkWindowSize(x) {
    if (x.matches) { // If media query matches
    //   document.body.style.backgroundColor = "yellow";
      ReactDOM.render(<MobileApp />, document.getElementById("app"));
    } else {
    //   document.body.style.backgroundColor = "pink";
      ReactDOM.render(<DesktopApp />, document.getElementById("app"));
    }
  }
  
  var x = window.matchMedia("(max-width: 600px)")
  checkWindowSize(x) // Call listener function at run time

// ReactDOM.render(<MobileApp />, document.getElementById("app"));
// ReactDOM.render(<App />, document.getElementById("app"));