import React from "react";
import "./Navbar.scss";
import { MdOutlineSearch, MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import SideMenu from "../SideMenu";

const Navbar = () => {
  const menus = [
    { label: "Demos", link: "/demos" },
    { label: "Pages", link: "#" },
    { label: "Portofolio", link: "#" },
  ];

  return (
    <div className="navbar">
      <div className="navbar-inner" style={{ display: "flex" }}>
        <div className="left" style={{ display: "flex" }}>
          {menus.map((menu, index) => (
            <div key={index}>
              <a href={menu.link} className="item-link">
                {menu.label}
              </a>
              <FiChevronDown />
            </div>
          ))}
        </div>

        <div className="right" style={{ display: "flex" }}>
          <div>
            <MdOutlineShoppingCart />
          </div>
          <div>
            <MdOutlineSearch />
            <input type="text" className="search-input" placeholder="Search" />
          </div>
          <div>
            <HiOutlineMenu />
          </div>
        </div>
      </div>

      <SideMenu />
    </div>
  );
};

export default Navbar;
