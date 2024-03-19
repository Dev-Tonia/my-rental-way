import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import "../../general.css";
// import "./header.css";
import openIcon from "../../assets/icons/icons8-menu-24.png";
import closeIcon from "../../assets/icons/icons8-close-24.png";
import Logo from "../../assets/images/Logo.jpeg";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [active, setActive] = useState("nav__menu");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Rentals",
      path: "/rentals",
    },
    {
      title: "Venue Booking",
      path: "/venue-booking",
    },
    {
      title: "Relocation",
      path: "/relocation",
    },
    {
      title: "Property",
      path: "/property",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const closeToggle = () => {
    setIsOpen(false);
  };

  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <header
      id="header"
      className=" sticky top-0 wrapper  py-3 bg-white/70 backdrop-blur-xl z-50 shadow-md"
    >
      <div className=" flex items-center justify-between">
        <div className=" w-[100px] ">
          <Link to="/">
            <img src={Logo} className=" " alt="Brand logo" />
          </Link>
        </div>
        <nav id="navbar" className="  order-last md:order-none ">
          <ul className={`hidden md:flex items-center space-x-8   ${active}`}>
            {navItems.map((navItem) => (
              <li key={navItem.title} className=" nav-item">
                <NavLink className=" font-semibold" to={navItem.path}>
                  {navItem.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div onClick={navToggle} className={`block md:hidden`}>
            <img src={isOpen ? closeIcon : openIcon} alt="Toggle Icon" />
          </div>
        </nav>

        <div className=" header_last flex items-center space-x-6">
          <div className=" relative">
            <Link to="/cart">
              <i className="bi bi-cart3 text-3xl"></i>
            </Link>
            <div className=" w-7 h-7 rounded-full p-1 flex items-center justify-center bg-primary-600/50 z-40 backdrop-blur absolute -top-2 left-4">
              <span className=" font-bold">10</span>
            </div>
          </div>
          <button className=" btn cursor-pointer">Explore</button>
        </div>
      </div>
      {isOpen && <MobileHeader active={active} closeNavbar={closeToggle} />}
    </header>
  );
};

export default Header;
