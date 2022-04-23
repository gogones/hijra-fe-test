import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";
import clsx from "clsx";

const Button = ({ children, variant = "filled", className, ...props }) => {
  return (
    <button
      className={clsx(
        "button",
        {
          "button-filled": variant === "filled",
          "button-outlined": variant === "outlined",
          "button-text": variant === "text",
          "button-icon": variant === "icon",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["filled", "outlined", "text", "icon"]),
  className: PropTypes.string,
};

export default Button;
