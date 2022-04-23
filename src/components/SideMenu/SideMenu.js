import React from "react";
import { MdChatBubbleOutline, MdOutlineShoppingCart } from "react-icons/md";
import { IoDocumentTextOutline, IoPeopleOutline } from "react-icons/io5";
import { FiLifeBuoy } from "react-icons/fi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import "./SideMenu.scss";
import MenuItem from "../MenuItem";

const SideMenu = () => {
  const menus = [
    { icon: <MdChatBubbleOutline /> },
    { icon: <FiLifeBuoy /> },
    { icon: <IoDocumentTextOutline /> },
    { icon: <HiOutlineVideoCamera /> },
    { icon: <IoPeopleOutline /> },
    { icon: <MdOutlineShoppingCart /> },
  ];

  return (
    <div className="sidemenu-container">
      {menus.map((menu, index) => (
        <MenuItem key={index}>{menu.icon}</MenuItem>
      ))}
    </div>
  );
};

export default SideMenu;
