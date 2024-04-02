import ProductCard from "../../components/reusableUi/ProductCard";
import { One } from "../../utils/images";
import { category } from "../../utils/productItems";

export default function Centerpiece() {
  return (
    <div className="grid grid-cols-1 min-[690px]:grid-cols-2 lg:grid-cols-3 gap-5 py-16">
      {category.centerpieces.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
