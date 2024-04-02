import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import "../../general.css";
// import "./header.css";
import openIcon from "../../assets/icons/icons8-menu-24.png";
import closeIcon from "../../assets/icons/icons8-close-24.png";
import Logo from "../../assets/images/Logo.jpeg";
import MobileHeader from "./MobileHeader";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const Header = () => {
  const [active, setActive] = useState("nav__menu");
  const [isOpen, setIsOpen] = useState(false);

  const { cartItem } = useContext(CartContext);

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
        {/* BRAND LOGO */}
        <div className=" w-[100px] ">
          <Link to="/">
            <img src={Logo} className=" " alt="Brand logo" />
          </Link>
        </div>

        {/* Large screen menu */}
        <nav id="navbar" className="  order-last min-[900px]:order-none ">
          <ul
            className={`hidden min-[900px]:flex items-center space-x-8 ps-10  ${active}`}
          >
            {navItems.map((navItem) => (
              <li key={navItem.title} className=" nav-item">
                <NavLink className=" font-semibold" to={navItem.path}>
                  {navItem.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div onClick={navToggle} className={`block min-[900px]:hidden ps-5 `}>
            <img src={isOpen ? closeIcon : openIcon} alt="Toggle Icon" />
          </div>
        </nav>

        {/* CART LOGO */}
        <div className=" header_last flex items-center space-x-6 ms-auto ">
          <div className="  ">
            <Link to="/cart" className="relative">
              <i className="bi bi-cart3 text-3xl"></i>
              <div className=" w-7 h-7 rounded-full p-1 flex items-center justify-center bg-primary-600/50 z-40 backdrop-blur absolute -top-5 left-4">
                <span className=" font-bold">{cartItem.length}</span>
              </div>
            </Link>
          </div>

          {/*  */}
          <Link to="/rentals" className="hidden lg:block btn cursor-pointer">
            Explore
          </Link>
        </div>
      </div>
      {isOpen && <MobileHeader active={active} closeNavbar={closeToggle} />}
    </header>
  );
};

export default Header;
