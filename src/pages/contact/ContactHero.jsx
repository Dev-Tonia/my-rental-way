import React from "react";
import { Ellipse } from "../../utils/images";
export default function ContactHero() {
  return (
    <section id="" className="  wrapper py-20">
      <div className=" relative overflow-hidden bg-gradient-to-r from-[#FF4D003D] via-[#FFC93F3D] to-[#FF5C003D] rounded-3xl flex items-center justify-center py-16">
        <img
          src={Ellipse}
          className=" w-[5%] absolute right-[20%] -bottom-6"
          alt=""
        />
        <img src={Ellipse} className=" w-[5%] absolute -right-8 z-[1]" alt="" />
        <div className=" w-9/12 px-5">
          <div className=" flex items-center justify-center mb-8">
            <div className=" relative">
              <h2 className=" font-bold text-4xl text-neutral-50">
                Get in touch
              </h2>
            </div>
          </div>
          <p className=" text-neutral-50 text-center">
            Have questions or need assistance? We're here to help you every step
            of the way. Reach out to our friendly team for personalized support.
          </p>
        </div>
      </div>
    </section>
  );
}
