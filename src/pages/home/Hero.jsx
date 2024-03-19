import React, { useState } from "react";

// import "./home.css"; // Import the CSS file for Hero component styles
import SimpleSlider from "./CustomSlider";
import { Link, NavLink } from "react-router-dom";
import { Ellipse } from "../../utils/images";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <SimpleSlider />
    </section>
  );
};

export default Hero;
