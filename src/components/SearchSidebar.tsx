import React from "react";
import { FaTimes, FaSearch } from "react-icons/fa";
import SearchList from "./SearchList";

interface SearchSidebarProps {
  closeFn: () => void;
}

const SearchSidebar: React.FC<SearchSidebarProps> = ({ closeFn }) => {
  return (
    <div className="flex flex-col p-2 lg:p-5 text-greyw">
      <div className="ml-auto mb-5">
        <button onClick={closeFn}>
          <FaTimes size={20} />
        </button>
      </div>

      <div className="flex space-x-2 items-center justify-between mb-10">
        <div className="flex items-center border border-greyw grow pl-3">
          <FaSearch />
          <input
            className="bg-transparent w-fit lg:w-full py-2 px-1 lg:p-2 focus:outline-none"
            placeholder="search location"
          />
        </div>
        <button className="bg-[#3C47E9] px-4 py-2 drop-shadow active:drop-shadow-sm">
          Search
        </button>
      </div>

      <ul>
        <SearchList />
      </ul>
    </div>
  );
};

export default SearchSidebar;
