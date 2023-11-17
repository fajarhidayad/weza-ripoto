import React, { useContext, useState } from 'react';
import {
  IoChevronForwardOutline,
  IoCloseOutline,
  IoSearchOutline,
} from 'react-icons/io5';
import { getWeatherLocation } from '../../api';
import { WeatherData } from '@/api/types';
import { WeatherContext } from '@/hooks/WeatherProvider';
import { motion } from 'framer-motion';

interface SearchTabProps {
  setSearchTab: (status: boolean) => void;
}

const SearchTab: React.FC<SearchTabProps> = (props) => {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState<undefined | null | WeatherData>(
    undefined
  );
  const weatherContext = useContext(WeatherContext);

  async function getLocation(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!location) return;
    const data = await getWeatherLocation(location);
    setResult(data);
  }

  function setWeatherLocation() {
    if (result) {
      weatherContext?.setWeatherData(result);
      props.setSearchTab(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 30 }}
      transition={{ duration: 0.35 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="bg-primary text-t-light flex flex-col px-1 min-[375px]:px-5"
    >
      <button
        className="ml-auto mb-4 active:translate-y-0.5"
        onClick={() => props.setSearchTab(false)}
      >
        <IoCloseOutline size={30} />
      </button>

      <form
        onSubmit={getLocation}
        className="flex justify-between space-x-1 lg:space-x-3 items-stretch mb-5"
      >
        <div className="border focus:border-t-light border-t-light/40 flex-1 px-2 flex items-center">
          <IoSearchOutline />
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-transparent focus:outline-none pl-2"
            placeholder="Search location"
          />
        </div>
        <button
          type="submit"
          className="bg-[#3C47E9] py-3 px-4 active:translate-y-0.5"
        >
          Search
        </button>
      </form>

      {result && (
        <ul>
          <li>
            <button
              onClick={setWeatherLocation}
              className="border-transparent border px-4 py-3 w-full flex justify-between items-center hover:border-t-light mb-3 active:translate-y-0.5"
            >
              <p>{result.cityName}</p>
              <IoChevronForwardOutline className="" />
            </button>
          </li>
        </ul>
      )}
      {result === null && <p>Location not found</p>}
    </motion.div>
  );
};

export default SearchTab;
