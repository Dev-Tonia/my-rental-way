import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./rental.css";

export default function Dropdown() {
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
  const [showMenu, setShowMenu] = useState(false);
  const [menuTitle, setMenuTitle] = useState("All product");
  function toggleShow(title) {
    setShowMenu((showMenu) => !showMenu);
    setMenuTitle(title);
    console.log(menuTitle);
  }
  function closeModal() {
    setShowMenu(false);
  }
  return (
    <div className="">
      <button onClick={() => toggleShow(menuTitle)} className="anchor">
        {menuTitle}
      </button>
      {showMenu && (
        <div className="menu">
          {navItems.map((item) => (
            <div
              className="menu-item left-0 right-0"
              key={item.title}
              onClick={() => toggleShow(item.title)}
            >
              <NavLink to={item.path}>{item.title}</NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
