import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const SearchList = () => {
  return (
    <li className="border border-transparent text-transparent hover:text-greyw hover:border-[#616475] px-3 py-4 mb-5">
      <button className="flex justify-between items-center w-full">
        <span className="text-greyw">London</span> <IoIosArrowForward />
      </button>
    </li>
  );
};

export default SearchList;
