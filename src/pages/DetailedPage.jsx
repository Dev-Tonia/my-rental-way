import React, { useState } from "react";
import RoundedImg from "../components/reusableUi/RoundedImg";
import EllipseCircle from "../components/reusableUi/EllipseCircle";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export default function DetailedPage() {
  let location = useLocation();
  const navigate = useNavigate();

  const { cartItem, setCartItem } = useContext(CartContext);
  const [isAdd, setIsAdd] = useState(false);
  const [pickVariant, setPickVariant] = useState("");
  const [quantity, setQuantity] = useState(1);
  const data = location.state;

  const whatever = {
    title: data.name,
    variant: data.detail,
    variantChoice: pickVariant,
    src: data.src,
    quantity: quantity,
    pricePerUnit: 2,
    price: quantity * 2,
  };

  const addToCart = () => {
    setCartItem([...cartItem, whatever]);
    setIsAdd(true);
  };
  return (
    <section className=" ">
      <div className=" wrapper py-10">
        <div className=" md:flex  gap-14">
          <RoundedImg src={data.src} className=" md:w-5/12 h-[70vh] " />

          <div className=" grid-cols-12 md:w-7/12">
            <div className="  mt-4">
              <h5 className=" font-bold text-2xl text-neutral-50">
                {data.name}
              </h5>
              <p className="  text-primary-600 font-bold mt-4">
                <span>&#x24;</span>
                <span>1.75+ VAT</span>
              </p>
            </div>

            <div className=" space-y-3 py-8">
              <span className=" font-bold text-lg text-[#474747]">
                {data.detail}
              </span>
              <div className=" flex space-x-4">
                {data.name === "Chair" ? (
                  <>
                    <EllipseCircle className={" bg-primary-600"} />
                    <EllipseCircle className={" bg-secondary"} />
                    <EllipseCircle className={" bg-[#ADFE01]"} />
                  </>
                ) : (
                  data.detailLists.map((detailList) => (
                    <div
                      className=" min-w-7 h-7 p-3 rounded bg-gray-300/40 flex items-center justify-center cursor-pointer"
                      key={detailList}
                      onClick={() => setPickVariant(detailList)}
                    >
                      <span className=" font-semibold">{detailList}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className=" grid grid-cols-6 space-x-7 items-center">
              <div className=" ">
                <h6 className=" text-neutral-50 font-bold text-lg mb-2">
                  Quantity
                </h6>
                <div className="  ">
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min={1}
                    className=" w-full outline-none border border-neutral-20 rounded-lg px-3 py-2"
                  />
                </div>
              </div>
              <div className="rental_products_btn col-span-5">
                {isAdd ? (
                  <button
                    className=" border border-primary-600 text-primary-600 font-semibold  rounded-3xl px-7 py-2"
                    onClick={() => navigate(-1)}
                  >
                    Add More Item
                  </button>
                ) : (
                  <button
                    className=" btn font-bold text-sm"
                    onClick={addToCart}
                  >
                    Book Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
