import { useNavigate } from "react-router-dom";
import EllipseCircle from "./EllipseCircle";
import RoundedCard from "./RoundedCard";
import RoundedImg from "./RoundedImg";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const gotoDetailPage = () => navigate("/details", { state: product });

  //   const details = ;
  return (
    <RoundedCard className=" p-5 pb-10 transition ease-in-out delay-150 hover:scale-110">
      <div>
        <RoundedImg src={product.src} className={"h-[220px] "} />

        <div className=" flex justify-between items-center mt-4">
          <h5 className=" font-semibold text-xl text-neutral-50 w-[70%] capitalize">
            {product.title}
          </h5>
          <p className="  text-primary-600 font-semibold">
            <span>£</span>
            <span>{product.price}+ VAT</span>
          </p>
        </div>

        <div className=" flex justify-between items-center mt-4">
          <div className=" space-y-3">
            <span className=" font-bold text-lg text-[#474747]">
              {product.detail}
            </span>
            <div className=" flex space-x-4">
              {product.title === "Chair" ? (
                <>
                  <EllipseCircle className={" bg-primary-600"} />
                  <EllipseCircle className={" bg-secondary"} />
                  <EllipseCircle className={" bg-[#ADFE01]"} />
                </>
              ) : product.detailLists ? (
                product.detailLists.map((detailList) => (
                  <span key={detailList}>{detailList}</span>
                ))
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="rental_products_btn">
            <button className=" btn font-bold text-sm" onClick={gotoDetailPage}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </RoundedCard>
  );
};

export default ProductCard;
