import React from "react";
import RoundedImg from "../reusableUi/RoundedImg";
import { Two } from "../../utils/images";
export default function CartCard({ item }) {
  return (
    <div className=" md:flex justify-between  items-center border-b-2 pb-3 pt-8 md:pt-10">
      <div className=" flex space-x-5 items-center md:w-6/12 pb-3 md:pb-0">
        <div className=" w-6/12 relative">
          <RoundedImg src={item.src} />
          <div className=" w-6 h-6 p-2 rounded-full bg-red-600 absolute -top-2 -right-3 flex items-center justify-center cursor-pointer ">
            <i class="bi bi-x text-2xl text-white "></i>
          </div>
        </div>
        <div className=" text-neutral-50 font-bold">
          <h6 className="  text-xl">{item.title}</h6>

          <h6>
            <span className=" text-neutral-30">{item.variant}:</span>{" "}
            {item.variantChoice}
          </h6>
        </div>
      </div>

      <div className=" md:w-4/12 pb-3 md:pb-0">
        <h6 className=" text-neutral-50 font-bold text-lg">
          <span className=" inline-block md:hidden text-neutral-20">
            Prices:
          </span>
          <span> £</span>
          {item.price}
        </h6>
      </div>
      <div className=" flex space-x-3 items-center md:w-2/12">
        <h6 className=" text-neutral-50 font-bold text-lg">Quantity</h6>
        <div className=" w-2/5 ">
          <input
            type="number"
            min={0}
            className=" w-full outline-none border border-neutral-20 rounded-lg px-3 py-2"
          />
        </div>
      </div>
    </div>
  );
}
