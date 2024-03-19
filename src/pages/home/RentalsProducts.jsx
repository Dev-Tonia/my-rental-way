import ProductCard from "../../components/reusableUi/ProductCard";
import { products } from "../../utils/contents/homeContents";

const RentalsProducts = () => {
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

        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-16">
          {products.map((product) => (
            <ProductCard product={product} key={product.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentalsProducts;
