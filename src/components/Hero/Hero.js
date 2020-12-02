import React from "react";
import logo from "../../images/allabout.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <img src={logo} alt="" />
        <h2>"Where a flush beats a full house"</h2>
        <p>
          All About Plumbing Of Orlando is a full-service residential and
          commercial plumbing company. We are fully licensed, bonded and insured
          serving Orlando and the greater Orlando area.
        </p>
      </div>
    </>
  );
};

export default Hero;
