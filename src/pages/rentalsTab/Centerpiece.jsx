import ProductCard from "../../components/reusableUi/ProductCard";
import { One } from "../../utils/images";

export default function Centerpiece() {
  const Items = Array.from({ length: 6 }, (_, index) => index);
  const product = {
    name: "CenterPlace",
    detail: "Color",
    detailLists: ["S", "M", "L"],
    src: One,
  };
  return (
    <div className="grid grid-cols-3 gap-5 py-16">
      {Items.map((item) => (
        <ProductCard product={product} key={item} />
      ))}
    </div>
  );
}
