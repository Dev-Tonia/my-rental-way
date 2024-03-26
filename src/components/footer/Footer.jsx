/* eslint-disable react/jsx-no-target-blank */
// import '../../general.css';
// import './footer.css';
import Logo from "../../assets/images/my-way-logo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className=" bg-[#FAFAFA] pt-10">
      <div className="wrapper">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="md:flex md:justify-between ">
            <div className="mb-6 md:mb-0 md:w-[40%]">
              <div className=" flex flex-col items-center">
                <img className="" src={Logo} alt="Brand Logo" />
                <div className=" font-bold text-2xl ">MY WAY Rentals</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:w-[60%]">
              <div className="">
                <h4 className=" font-bold text-xl">Services</h4>
                <ul>
                  <li className=" mt-3">
                    <Link to="/rentals">Rentals</Link>
                  </li>
                  <li className=" mt-3">
                    <Link to="/venue-booking">Venue booking</Link>
                  </li>
                  <li className=" mt-3">
                    <Link to="/relocation">Relocation</Link>
                  </li>
                  <li className=" mt-3">
                    <Link to="/property">Property</Link>
                  </li>
                </ul>
              </div>

              <div className="">
                <h4 className=" text-[#141414] font-bold text-xl">Info</h4>
                <ul>
                  <li className=" mt-3">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li className=" mt-3">
                    <Link to="/about-us">About Us</Link>
                  </li>
                </ul>
              </div>

              <div className="">
                <h4 className="  font-bold text-xl">Resources</h4>
                <ul>
                  <li className=" mt-3">
                    <Link to="/terms-and-conditions">Terms & Condition</Link>
                  </li>
                  <li className=" mt-3">
                    <Link to="/privacy-policy">
                      MY WAY Rental Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center py-6 mt-8 border-t border-[#F5F5F5] text-[#8C8C8C]">
          <div className=" flex">
            <span>&copy;</span>
            <p>MY WAY Rental Services Ltd. 2024 . All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
