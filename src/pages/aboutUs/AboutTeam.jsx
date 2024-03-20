import React from "react";
import { Team1, Team2, Team3, Team4 } from "../../utils/images";
import RoundedImg from "../../components/reusableUi/RoundedImg";
export default function AboutTeam() {
  return (
    <section className=" pb-10">
      <div className=" wrapper">
        <div className="flex flex-col-reverse md:grid grid-cols-12 items-center gap-7">
          <div className=" md:col-span-7">
            <div className=" grid grid-cols-5 gap-4">
              <RoundedImg src={Team1} className={"col-span-2"} />
              <RoundedImg src={Team2} className={" col-span-3"} />
              <RoundedImg src={Team3} className={" col-span-3"} />
              <RoundedImg src={Team4} className={" col-span-2"} />
            </div>
          </div>
          <div className=" md:col-span-5">
            <div className=" ">
              <h2 className="  text-5xl font-bold text-neutral-50 px-5 pb-5">
                Our Team{" "}
              </h2>
              <p className=" text-neutral-30 text-xl">
                At MY WAY Rentals we strive to integrate our knowledge of
                rentals, relocation, and real estate, using technology to create
                a business solution that work for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
