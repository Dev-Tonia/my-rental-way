import Banner from "./Banner";
import PropertyCustomer from "./PropertyCustomer";
import RelocateMovers from "./RelocateMovers";
import RentalBooking from "./RentalBooking";
import RentalsProducts from "./RentalsProducts";
import ServicePlatform from "./ServicePlatform";
import Hero from "./Hero";
import "./home.css";

const Home = () => {
  return (
    <div className=" overflow-hidden">
      <Hero />
      <ServicePlatform />
      <RentalBooking />
      <RentalsProducts />
      <RelocateMovers />
      <PropertyCustomer />
      <Banner />
    </div>
  );
};

export default Home;
