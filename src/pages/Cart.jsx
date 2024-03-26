import { Link, useNavigate } from "react-router-dom";
import CartCard from "../components/cart/CartCard";
import RoundedCard from "../components/reusableUi/RoundedCard";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export default function Cart() {
  const navigate = useNavigate();

  const { cartItem } = useContext(CartContext);

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
            <CartCard item={item} />
          ))}
          <div className=" flex items-center justify-between py-10 px-3">
            <h2 className=" font-bold text-2xl text-neutral-50"> Subtotal </h2>
            <h4 className=" text-2xl font-bold text-primary-600">
              <span>£</span>
              <span>156.56</span>
            </h4>
          </div>
        </RoundedCard>
      )}
    </div>
  );
}
