import React, { useState } from "react";

// import "./home.css"; // Import the CSS file for Hero component styles
import SimpleSlider from "./CustomSlider";
import { Link, NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="hero relative">
      <div className=" wrapper absolute z-40 top-6">
        <div className=" rounded-md w-3/5   bg-white/10 border border-white/50 backdrop-blur-xl">
          <div className="  p-12 text-white">
            <h2 className="text-6xl text-white ">
              Create Memories in Style: Choose Your Ideal Venue Here
            </h2>
            <p data-aos="fade-up" className=" py-6">
              Experience extraordinary Moments and effortless Booking, with our
              Venue Collection
            </p>
            <Link to="#" className="btn font-semibold hover:text-white">
              Learn more
            </Link>
          </div>
        </div>
      </div>

      <SimpleSlider />
    </section>
  );
};

export default Hero;
