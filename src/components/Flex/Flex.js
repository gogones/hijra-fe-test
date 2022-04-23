import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import "./Flex.scss";

const Flex = ({
  className,
  flexGrow,
  flexShrink,
  flexBasis,
  flex,
  children,
  container,
  item,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
}) => {
  return (
    <div
      className={clsx("flex", { item: item, container: container }, className)}
      style={{
        flexGrow,
        flexShrink,
        flexBasis,
        flex,
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
      }}
    >
      {children}
    </div>
  );
};

Flex.propTypes = {
  className: PropTypes.string,
  container: PropTypes.bool,
  item: PropTypes.bool,
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  flexBasis: PropTypes.string,
  flex: PropTypes.string,
  children: PropTypes.node,
  flexWrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
  ]),
  alignItems: PropTypes.oneOf(["flex-start", "flex-end", "center", "stretch"]),
  flexDirection: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
};

export default Flex;
