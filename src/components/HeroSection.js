import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import Demo from "./videos/Demo.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={Demo} autoPlay loop muted />
      <div className="hero-heading">
        Welcome to <span>Startup Overflow</span>
      </div>
      <p>A community for Entreprenuers</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          ASK QUERY
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("find mentors")}
        >
          FIND MENTORS <i className="fa fa-search" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
