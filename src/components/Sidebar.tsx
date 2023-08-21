import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import BgCloud from "../assets/img/Cloud-background.png";
import { MeasurementContext } from "../hooks/MeasurementContextProvider";
import { WeatherContext } from "../hooks/WeatherProvider";
import moment from "moment";
import { weatherIcon } from "../assets/weatherCodes";
import { getIcon } from "../iconography";

const Sidebar = () => {
  const measurementContext = React.useContext(MeasurementContext);
  const weatherContext = React.useContext(WeatherContext);
  const today = new Date();
  const now = moment(today).format("dddd, D MMM");

  const icon = weatherIcon.find(
    (item) => item.code === weatherContext?.weatherData?.current.condition_code
  );

  const iconSrc = getIcon(icon!.icon);

  const temp =
    measurementContext?.measurement === "C"
      ? weatherContext?.weatherData?.current.temp_c
      : weatherContext?.weatherData?.current.temp_f;

  return (
    <aside className="flex flex-col lg:w-[400px] bg-primary py-4 lg:py-8 overflow-hidden min-h-screen">
      <div className="flex justify-between items-stretch mb-5 px-4 lg:px-8">
        <button className="bg-[#6E707A] px-3 py-2 lg:px-4 lg:py-3 text-white text-sm lg:text-base">
          Search for places
        </button>

        <button className="bg-[#6E707A] p-2 text-white rounded-full h-12 w-12 flex items-center justify-center">
          <BiCurrentLocation className="text-xl lg:text-2xl" />
        </button>
      </div>

      <div className="relative flex items-center justify-center py-10 mb-5">
        <img
          src={BgCloud}
          alt="cloud-bg"
          className="absolute opacity-5 top-0 bottom-0 hidden lg:block"
          height={500}
        />
        <img
          src={iconSrc}
          alt="weather-icon"
          className="relative z-10 w-[100px] lg:w-[200px]"
        />
      </div>

      <div className="flex items-baseline justify-center">
        <h1 className="text-white text-6xl lg:text-[100px] font-medium">
          {temp}
        </h1>
        <span className="text-5xl text-t-dark font-light">
          &deg;{measurementContext?.measurement}
        </span>
      </div>

      <h2 className="text-center text-t-dark text-3xl my-auto">
        {weatherContext?.weatherData?.current.condition_text}
      </h2>

      <div className="flex justify-center items-center space-x-3 text-t-dark mb-5">
        <p>Today</p>
        <span>&bull;</span>
        <p>{now}</p>
      </div>
      <div className="flex justify-center items-center text-t-dark space-x-3">
        <FaLocationDot />
        <p>
          {weatherContext?.weatherData?.cityName}
          {", "}
          {weatherContext?.weatherData?.country}
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
