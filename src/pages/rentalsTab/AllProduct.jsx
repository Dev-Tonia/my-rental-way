import ProductCard from "../../components/reusableUi/ProductCard";
import { allProducts } from "../../utils/productItems";
/*
import { One, Two, Three, Four, Five, Six } from "../../utils/images";
const products = [
  {
    name: "Chair",
    detail: "Color",
    src: Five,
  },
  {
    name: "Table",
    detail: "Shape",
    detailLists: ["Rectangle", "Circle"],
    src: Six,
  },
  {
    name: "Tent",
    detail: "Size",
    detailLists: ["6x4 Meter"],
    src: Four,
  },
  {
    name: "Lighting",
    detail: "Size",
    detailLists: ["S", "M", "L"],
    src: Two,
  },
  {
    name: "CenterPlace",
    detail: "size",
    detailLists: ["S", "M", "L"],
    src: One,
  },
  {
    name: "Sound System",
    detail: "size",
    detailLists: ["S", "M", "L"],
    src: Three,
  },
];
*/
export default function AllProduct() {
  return (
    <div className="grid grid-cols-1 min-[690px]:grid-cols-2 lg:grid-cols-3 gap-5 py-16">
      {allProducts.map((product) => (
        <ProductCard product={product} key={product.name} />
      ))}
    </div>
  );
}
