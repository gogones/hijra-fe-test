import React from "react";
import "./Navbar.scss";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import SideMenu from "../SideMenu";
import SearchField from "../SearchField";
import Flex from "../Flex";
import Button from "../Button";

const Navbar = () => {
  const menus = [
    { label: "Demos", link: "/demos" },
    { label: "Pages", link: "#" },
    { label: "Portofolio", link: "#" },
  ];

  return (
    <div className="navbar">
      <Flex
        container
        justifyContent="space-between"
        alignItems="center"
        className="navbar-inner"
      >
        <Flex
          item
          container
          justifyContent="center"
          alignItems="center"
          className="left"
        >
          {menus.map((menu, index) => (
            <Flex item key={index} className="menu-button-container">
              <Button variant="text" className="menu-button">
                <Flex container justifyContent="center" alignItems="center">
                  {menu.label}
                  <FiChevronDown />
                </Flex>
              </Button>
            </Flex>
          ))}
        </Flex>

        <Flex container item className="right">
          <Button variant="icon">
            <MdOutlineShoppingCart className="cart-icon" />
          </Button>

          <SearchField />

          <Button variant="icon">
            <HiOutlineMenu className="burger-icon" />
          </Button>
        </Flex>
      </Flex>

      <SideMenu />
    </div>
  );
};

export default Navbar;
