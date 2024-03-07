import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

import couser1 from "../../assets/Images/hero1.png";
import couser2 from "../../assets/Images/hero2.png";
import couser3 from "../../assets/Images/hero3.png";
import couser4 from "../../assets/Images/hero4.png";
const imagePaths = [couser1, couser2, couser3, couser4];

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      {imagePaths.map((path) => (
        <div className=" w-full h-screen " key={path}>
          <img src={path} alt="" className=" w-full" />
        </div>
      ))}
    </Slider>
  );
}
