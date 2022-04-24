import React from "react";
import { MdChatBubbleOutline, MdOutlineShoppingCart } from "react-icons/md";
import { IoDocumentTextOutline, IoPeopleOutline } from "react-icons/io5";
import { FiLifeBuoy } from "react-icons/fi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import "./SideMenu.scss";
import MenuItem from "../MenuItem";
import Button from "../Button";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS } from "../../constants/breakpoints";

// eslint-disable-next-line react/display-name
const SideMenu = React.forwardRef((_, ref) => {
  const menus = [
    { icon: <MdChatBubbleOutline />, label: "Chat" },
    { icon: <FiLifeBuoy />, label: "Life" },
    { icon: <IoDocumentTextOutline />, label: "Document" },
    { icon: <HiOutlineVideoCamera />, label: "Video" },
    { icon: <IoPeopleOutline />, label: "People" },
    { icon: <MdOutlineShoppingCart />, label: "Cart" },
  ];

  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  return (
    <div className="sidemenu-container" ref={ref}>
      {menus.map((menu, index) => (
        <MenuItem key={index}>
          <Button variant="icon">{menu.icon}</Button>
          {breakpoint === "xs" && <span>&nbsp;{menu.label}</span>}
        </MenuItem>
      ))}
    </div>
  );
});

export default SideMenu;
