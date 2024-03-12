import React from "react";
import RoundedCard from "../../components/reusableUi/RoundedCard";
import {
  HomeIcon,
  HomeIcon2,
  BookIcon,
  IconBook2,
  PurchaseTag,
  OutlineSeal,
} from "../../utils/images";

export default function PropertySections() {
  const cardItems = [
    {
      src: HomeIcon,
      title: "Exploration and application : Financial assessment",
      body: "  Apply, provide information about your financial situation and preferences. MY WAY Rental conducts a thorough financial assessment to determine the prospective tenant's eligibility for the rent-to-own program. Factors such as income, credit history, and debt-to-income ratio are considered.",
      bg: "#E9956636",
    },
    {
      src: HomeIcon2,
      title: "Customized Rent-to-own",
      body: "MY WAY Rental designs a personalized rent-to-own plan for the tenant. The plan includes details such as the down payment percentage, monthly rent amount, lease duration, and the portion of each payment going towards the future purchase.",
      bg: "#66E98336",
    },
    {
      src: OutlineSeal,
      title: "Select property and seal  Lease agreement",
      body: " Once the rent-to-own plan is agreed upon, tenants select a property from MY WAY Rental's portfolio. Tenants sign a lease agreement that outlines the terms of the rental period, including the monthly rent, lease duration, and any specific conditions agreed upon.      ",
      bg: "#668AE936",
    },
    {
      src: PurchaseTag,
      title: "Purchase option and process",
      body: "Tenants have the option to buy the property after a set amount of time, usually 3 to 5years. The equity they have built up through their monthly payments acts as a down payment for the purchase. If tenant chooses to buy, My WAY Rental helps them make the transfer from renters to owners. The purchase price is decided upon using the terms that were agreed upon in the rent-to-own plan.",
      bg: "#E9956636",
    },
    {
      src: IconBook2,
      title: "Provision of financial guidance",
      body: "Throughout the rental period, MY WAY Rental offers financial guidance and educational resources to help tenants manage their finances and prepare for homeownership. Also My way Rental continues to offer support, ensuring a smooth transition and addressing any post-purchase questions or concerns.      ",
      bg: "#66E98336",
    },
  ];
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
                "border border-white/40 shadow-lg shadow-[#2166A71A] py-10 px-2 text-center basis-[calc(32%-20px)] m-4"
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
