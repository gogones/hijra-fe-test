import React, { useState } from "react";
import "./Navbar.scss";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import SideMenu from "../SideMenu";
import SearchField from "../SearchField";
import Flex from "../Flex";
import Button from "../Button";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS } from "../../constants/breakpoints";
import { usePopper } from "react-popper";

const Navbar = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const menus = [
    { label: "Demos", link: "/demos" },
    { label: "Pages", link: "#" },
    { label: "Portofolio", link: "#" },
  ];

  const [show, setShow] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [],
  });

  return (
    <div className="navbar">
      <Flex
        container
        justifyContent={breakpoint === "xs" ? "flex-end" : "space-between"}
        alignItems="center"
        className="navbar-inner"
      >
        {breakpoint !== "xs" && (
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
        )}

        <Flex container item className="right">
          <Button variant="icon">
            <MdOutlineShoppingCart className="cart-icon" />
          </Button>

          <SearchField />

          {breakpoint === "xs" && (
            <Button
              variant="icon"
              ref={setReferenceElement}
              onClick={() => setShow(!show)}
            >
              <HiOutlineMenu className="burger-icon" />
            </Button>
          )}
        </Flex>
      </Flex>

      {show && (
        <SideMenu
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        />
      )}

      {breakpoint !== "xs" && <SideMenu />}
    </div>
  );
};

export default Navbar;
