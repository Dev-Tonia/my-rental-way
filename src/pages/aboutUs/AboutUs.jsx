import React from "react";
import GradientHeader from "../../components/reusableUi/GradientHeader";
import AboutTeam from "./AboutTeam";

export default function AboutUs() {
  const body =
    "MY WAY Rentals is an innovative and customer-centric event management and rental services company. We specialise in providing a diverse range of event solutions, combining cutting-edge technology with sustainable practices. Our offerings include traditional event essentials such as Marquee tents, Chairs, Tables, Lightings, Bouncy Castles, decorative materials, and advanced tech rentals such as Virtual Reality (VR) and Augmented Reality (AR), venue booking, Removals and a rent-to-own property development.    ";
  return (
    <>
      <GradientHeader title={"About Us"} body={body} />
      <AboutTeam />
    </>
  );
}
