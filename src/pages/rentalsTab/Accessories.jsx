import ProductCard from "../../components/reusableUi/ProductCard";
import { Three } from "../../utils/images";

export default function Accessories() {
  const Items = Array.from({ length: 6 }, (_, index) => index);
  const product = {
    name: "Sound System",
    detail: "Color",
    detailLists: ["S", "M", "L"],
    src: Three,
  };
  return (
    <div className="grid grid-cols-1 min-[690px]:grid-cols-2 lg:grid-cols-3 gap-5 py-16">
      {Items.map((item) => (
        <ProductCard product={product} key={item} />
      ))}
    </div>
  );
}
