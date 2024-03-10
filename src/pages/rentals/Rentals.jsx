import { Outlet } from "react-router-dom";
import RentalHeader from "./RentalHeader";
const Rentals = () => {
  return (
    <>
      <RentalHeader />
      <div className=" wrapper">
        <Outlet />
      </div>
    </>
  );
};

export default Rentals;
