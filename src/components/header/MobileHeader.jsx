import { NavLink, Link } from "react-router-dom";
const links = [
  { path: "/", title: "Home" },
  { path: "/rentals", title: "Rentals" },
  { path: "/venue-booking", title: "Venue Booking" },
  { path: "/relocation", title: "Relocation" },
  { path: "/property", title: "Property" },
  { path: "/contact", title: "Contact" },
];

const MobileHeader = ({ active, closeNavbar }) => {
  return (
    <ul className={` min-[900px]:hidden  block  ${active} wrapper`}>
      {links.map((link) => (
        <li key={link.path} onClick={closeNavbar} className=" py-2 border-b">
          <NavLink className="nav-link" to={link.path}>
            {link.title}
          </NavLink>
        </li>
      ))}
      <li className=" py-3">
        <Link to="/rentals" className=" btn cursor-pointer px-10">
          Explore
        </Link>
      </li>
    </ul>
  );
};

export default MobileHeader;
