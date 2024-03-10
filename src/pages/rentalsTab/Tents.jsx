import ProductCard from "../../components/reusableUi/ProductCard";
import { Four } from "../../utils/images";

export default function Tents() {
  const Items = Array.from({ length: 6 }, (_, index) => index);
  const product = {
    name: "Tent",
    detail: "Size",
    detailLists: ["6x4 Meter"],
    src: Four,
  };
  return (
    <div className="grid grid-cols-3 gap-5 py-16">
      {Items.map((item) => (
        <ProductCard product={product} key={item} />
      ))}
    </div>
  );
}
