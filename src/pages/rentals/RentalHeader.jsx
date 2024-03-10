import { NavLink } from "react-router-dom";

const RentalHeader = () => {
  const navItems = [
    {
      title: "All Products",
      path: "all-products",
    },
    {
      title: "Tents",
      path: "tents",
    },
    {
      title: "Chair",
      path: "chair",
    },
    {
      title: "Lighting",
      path: "lighting",
    },
    {
      title: "Table",
      path: "table",
    },
    {
      title: "Centerpiece",
      path: "centerpiece",
    },
    {
      title: "Accessories",
      path: "accessories",
    },
    {
      title: "Inflatable",
      path: "inflatable",
    },
  ];

  return (
    <header className=" py-12 ">
      <div className=" wrapper">
        <div className=" flex flex-col items-center justify-center">
          <h2 className=" text-neutral-50 text-[40px] mb-2">
            Rental Products{" "}
          </h2>
          <ul className={`hidden md:flex items-center space-x-8 `}>
            {navItems.map((navItem) => (
              <li key={navItem.title} className=" nav-item">
                <NavLink className=" font-semibold" to={navItem.path}>
                  {navItem.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default RentalHeader;
