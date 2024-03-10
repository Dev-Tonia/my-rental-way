import { One, Two, Three, Four, Five, Six } from "../../utils/images";

import ProductCard from "../../components/reusableUi/ProductCard";

const RentalsProducts = () => {
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
      detail: "Color",
      detailLists: ["S", "M", "L"],
      src: One,
    },
    {
      name: "Sound System",
      detail: "Color",
      detailLists: ["S", "M", "L"],
      src: Three,
    },
  ];

  return (
    <section id="" className=" pt-4">
      <div className="wrapper">
        <div className=" flex  justify-center  items-center pt-16">
          <div className=" w-9/12 text-center ">
            <h2 className="  text-5xl font-bold text-neutral-50 px-5 pb-5">
              Browse rental products
            </h2>
            <p className=" text-neutral-30 text-xl">
              Explore our diverse range of rental product categories, from
              elegant furniture and stylish decor to cutting-edge audiovisual
              equipment, ensuring every aspect of your event is tailored to
              perfection.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 py-16">
          {products.map((product) => (
            <ProductCard product={product} key={product.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentalsProducts;
