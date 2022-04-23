import React from "react";
import "./MenuItem.scss";

// eslint-disable-next-line react/prop-types
const MenuItem = ({ children }) => {
  return <div className="menu-item">{children}</div>;
};

export default MenuItem;
