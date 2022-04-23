import React from "react";
import Flex from "../Flex";
import { MdOutlineSearch } from "react-icons/md";
import "./SearchField.scss";

const SearchField = () => {
  return (
    <Flex container justifyContent="center" alignItems="center">
      <MdOutlineSearch className="search-icon" />
      <input type="text" placeholder="Search" className="search-field" />
    </Flex>
  );
};

export default SearchField;
