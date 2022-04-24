import React from "react";
import Flex from "../Flex";
import { MdOutlineSearch } from "react-icons/md";
import "./SearchField.scss";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS } from "../../constants/breakpoints";

const SearchField = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  return (
    <Flex container justifyContent="center" alignItems="center">
      <MdOutlineSearch className="search-icon" />
      {breakpoint !== "xs" && (
        <input type="text" placeholder="Search" className="search-field" />
      )}
    </Flex>
  );
};

export default SearchField;
