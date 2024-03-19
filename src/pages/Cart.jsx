import { useNavigate } from "react-router-dom";
import CartCard from "../components/cart/CartCard";
import RoundedCard from "../components/reusableUi/RoundedCard";

export default function Cart() {
  const navigate = useNavigate();

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
      <RoundedCard className={" px-5 pb-2"}>
        <CartCard />
        <CartCard />
        <div className=" flex items-center justify-between py-10 px-3">
          <h2 className=" font-bold text-2xl text-neutral-50"> Subtotal </h2>
          <h4 className=" text-2xl font-bold text-primary-600">
            <span>£</span>
            <span>156.56</span>
          </h4>
        </div>
      </RoundedCard>
    </div>
  );
}
