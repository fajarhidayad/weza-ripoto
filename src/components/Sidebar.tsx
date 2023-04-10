import { useContext, useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { GlobalStateContext } from "../context";
import SearchSidebar from "./SearchSidebar";

import dayjs from "dayjs";
import "dayjs/locale/en";

const Sidebar = () => {
  const [searchBar, setSearchBar] = useState(false);
  const date = dayjs(Date.now()).locale("en").format("ddd, DD MMM");

  const {
    state: { current_weather, temperature },
  } = useContext(GlobalStateContext);
  const tempType = temperature === "CELCIUS" ? "C" : "F";
  const temp =
    temperature === "CELCIUS" ? current_weather.temp_c : current_weather.temp_f;

  return (
    <aside className="bg-main w-full min-h-screen lg:w-[450px] flex py-5 flex-col justify-between">
      {searchBar ? (
        <SearchSidebar closeFn={() => setSearchBar(false)} />
      ) : (
        <>
          <div className="mx-4 flex justify-between items-center">
            <button
              onClick={() => setSearchBar(true)}
              className="bg-[#6E707A] text-greyw font-medium px-4 py-2 drop-shadow"
            >
              Search for places
            </button>

            <button className="flex justify-center items-center w-10 h-10 bg-[#6E707A] text-greyw rounded-full drop-shadow">
              <BiCurrentLocation size={25} />
            </button>
          </div>
          <div className="flex justify-center items-center my-12">
            <img src="LightCloud.png" alt="Today Weather" width={150} />
          </div>

          <div className="flex flex-col grow justify-between items-center text-[#A09FB1] mt-5">
            <h1 className="font-medium text-9xl text-greyw">
              {temp}
              <span className="text-5xl font-normal text-[#88869D]">
                &deg;{tempType}
              </span>
            </h1>
            <h2 className="text-4xl font-medium">
              {current_weather.condition}
            </h2>

            <div className="flex flex-col items-center justify-between font-bold text-[#88869D]">
              <div className="flex justify-between space-x-2">
                <p>Today</p> <span>&bull;</span> <p>{date}</p>
              </div>
              <div className="flex items-center mt-4">
                <IoLocationSharp />
                <p>{current_weather.location}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
