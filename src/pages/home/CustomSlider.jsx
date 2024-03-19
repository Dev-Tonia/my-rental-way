import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import {
  Ellipse,
  couser1,
  couser2,
  couser3,
  couser4,
} from "../../utils/images";
import { Link } from "react-router-dom";
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
        <div key={path} className=" w-full min-h-screen">
          <div
            className=" w-full min-h-screen"
            style={{
              backgroundImage: `url(${path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="wrapper pt-7">
              <div className=" rounded-md md:w-10/12 lg:w-9/12 xl:w-3/5   bg-white/10 border border-white/50 backdrop-blur-xl">
                <div className="  p-12 text-white">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl text-white ">
                    Create Memories in Style: Choose Your Ideal Venue Here
                  </h2>
                  <p data-aos="fade-up" className=" py-6">
                    Experience extraordinary Moments and effortless Booking,
                    with our Venue Collection
                  </p>
                  <Link to="#" className="btn font-semibold hover:text-white">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
