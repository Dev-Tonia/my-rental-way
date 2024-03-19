import React from "react";
import RoundedCard from "../../components/reusableUi/RoundedCard";
import { cardItems } from "../../utils/contents/propertyContent";

export default function PropertySections() {
  return (
    <section className="  py-20">
      <div className="wrapper">
        <div className="flex item-center justify-center">
          <div className=" w-9/12 text-center ">
            <h2 className="  text-5xl font-bold text-neutral-50 px-5 pb-5">
              How it works
            </h2>
            <p className=" text-neutral-30 text-xl">
              Our aims to bridge the gap between renting and home ownership,
              offering a flexible and accessible pathway to property ownership.
            </p>
          </div>
        </div>

        <div className=" flex flex-wrap justify-center py-5">
          {cardItems.map((item) => (
            <RoundedCard
              className={
                "border border-white/40 shadow-lg shadow-[#2166A71A] py-10 px-2 text-center sm:basis-[calc(45%-20px)] min[900px]:basis-[calc(32%-20px)] m-4"
              }
            >
              <div className=" flex items-center justify-center">
                <div
                  className={`w-20 h-16  flex items-center justify-center bg-[${item.bg}] rounded-lg`}
                >
                  <img src={item.src} alt="" className=" " />
                </div>
              </div>
              <h2 className=" font-bold text-xl my-4">{item.title}</h2>
              <p className=" ">{item.body}</p>
            </RoundedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
