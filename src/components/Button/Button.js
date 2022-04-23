import React from "react";
import "./Button.scss";

// eslint-disable-next-line react/prop-types
const Button = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
