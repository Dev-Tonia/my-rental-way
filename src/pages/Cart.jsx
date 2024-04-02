import { Link, useNavigate } from "react-router-dom";
import CartCard from "../components/cart/CartCard";
import RoundedCard from "../components/reusableUi/RoundedCard";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";

export default function Cart() {
  const navigate = useNavigate();
  const { cartItem } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  // Getting the updated price
  const getCurrentItemPrice = (newPrice) => {
    setTotalPrice((prev) => prev + newPrice);
  };

  useEffect(() => {
    setTotalPrice(
      cartItem.reduce((acc, currentValue) => {
        return acc + currentValue.price;
      }, 0)
    );
  }, []);

  const goToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className=" wrapper pb-20">
      <div className=" flex items-center justify-between py-10 px-3">
        <h2 className=" font-bold text-2xl text-neutral-50"> Cart </h2>
        <button className="btn" onClick={goToCheckout}>
          Checkout
        </button>
      </div>
      {cartItem.length === 0 ? (
        <RoundedCard
          className={" h-[80hv] flex justify-center items-center  px-5 py-3"}
        >
          <div>
            <p className=" font-bold text-xl">Hey Your Cart Is Empty </p>
            <Link to="/rentals" className=" btn my-5 inline-block">
              Shop Items
            </Link>
          </div>
        </RoundedCard>
      ) : (
        <RoundedCard className={" px-5 pb-2"}>
          {cartItem.map((item) => (
            <CartCard
              item={item}
              key={item.title}
              getCurrentItemPrice={getCurrentItemPrice}
            />
          ))}
          <div className=" flex items-center justify-between py-10 px-3">
            <h2 className=" font-bold text-2xl text-neutral-50"> Subtotal </h2>
            <h4 className=" text-2xl font-bold text-primary-600">
              <span>£</span>
              <span>{totalPrice.toFixed(2)}</span>
            </h4>
          </div>
        </RoundedCard>
      )}
    </div>
  );
}
