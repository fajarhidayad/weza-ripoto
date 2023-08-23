import React from "react";
import {
  IoCloseOutline,
  IoSearchOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";

interface SearchTabProps {
  setSearchTab: (status: boolean) => void;
}

const SearchTab: React.FC<SearchTabProps> = (props) => {
  return (
    <div className="bg-primary text-t-light flex flex-col px-1 min-[375px]:px-5">
      <button
        className="ml-auto mb-4 active:translate-y-0.5"
        onClick={() => props.setSearchTab(false)}
      >
        <IoCloseOutline size={30} />
      </button>

      <div className="flex justify-between space-x-1 lg:space-x-3 items-stretch mb-5">
        <div className="border focus:border-t-light border-t-light/40 flex-1 px-2 flex items-center">
          <IoSearchOutline />
          <input
            className="bg-transparent focus:outline-none pl-2"
            placeholder="Search location"
          />
        </div>
        <button className="bg-[#3C47E9] py-3 px-4 active:translate-y-0.5">
          Search
        </button>
      </div>

      <ul>
        <li>
          <button className="border-transparent border px-4 py-3 w-full flex justify-between items-center hover:border-t-light mb-3 active:translate-y-0.5">
            <p>London</p>
            <IoChevronForwardOutline className="" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SearchTab;
