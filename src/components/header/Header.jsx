import { useState } from "react";
import { NavLink } from "react-router-dom";
// import "../../general.css";
// import "./header.css";
import openIcon from "../../assets/icons/icons8-menu-24.png";
import closeIcon from "../../assets/icons/icons8-close-24.png";
import Logo from "../../assets/images/Logo.jpeg";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [active, setActive] = useState("nav__menu");
  const [isOpen, setIsOpen] = useState(false);

  const closeToggle = () => {
    setIsOpen(false);
  };

  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <header id="header" className=" sticky top-0 wrapper  py-3 ">
      <div className=" flex items-center justify-between">
        <div className=" w-[100px] logo-menuflex">
          <NavLink to="/">
            <img src={Logo} className=" " alt="Brand logo" />
          </NavLink>
        </div>
        <nav id="navbar" className="  order-last md:order-none ">
          <ul className={`hidden md:flex items-center space-x-8   ${active}`}>
            <li>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-link " to="/rentals">
                Rentals
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-link " to="/venu-booking">
                Venu Booking
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-link " to="/relocation">
                Relocation
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-link " to="/property">
                Property
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-link " to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div onClick={navToggle} className={`block md:hidden`}>
            <img src={isOpen ? closeIcon : openIcon} alt="Toggle Icon" />
          </div>
        </nav>

        <div className=" header_last flex items-center space-x-2">
          <div>
            <i className="bi bi-cart3 text-2xl"></i>
          </div>
          <button className=" btn cursor-pointer">Explore</button>
        </div>
      </div>
      {isOpen && <MobileHeader active={active} closeNavbar={closeToggle} />}
    </header>
  );
};

export default Header;
