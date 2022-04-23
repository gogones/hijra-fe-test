import React from "react";
import Flex from "../Flex";
import { MdOutlineSearch } from "react-icons/md";
import "./SearchField.scss";

const SearchField = () => {
  return (
    <Flex container justifyContent="center" alignItems="center">
      <Flex item>
        <MdOutlineSearch className="search-icon" />
      </Flex>

      <Flex item>
        <input type="text" placeholder="Search" className="search-field" />
      </Flex>
    </Flex>
  );
};

export default SearchField;
