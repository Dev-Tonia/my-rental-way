import { NavLink } from "react-router-dom";
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
    <ul className={`md:hidden  block  ${active} wrapper`}>
      {links.map((link) => (
        <li key={link.path} onClick={closeNavbar}>
          <NavLink className="nav-link" to={link.path}>
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MobileHeader;
