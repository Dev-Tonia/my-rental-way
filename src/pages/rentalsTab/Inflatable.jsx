import ProductCard from "../../components/reusableUi/ProductCard";
import { Seven } from "../../utils/images";

export default function Inflatable() {
  const Items = Array.from({ length: 6 }, (_, index) => index);
  const product = {
    name: "Duck piece",
    detail: "Size",
    detailLists: ["S", "M", "L"],
    src: Seven,
  };
  return (
    <div className="grid grid-cols-3 gap-5 py-16">
      {Items.map((item) => (
        <ProductCard product={product} key={item} />
      ))}
    </div>
  );
}
