import React, { useContext } from "react";
import HighlightCard from "./HighlightCard";
import WeatherCard from "./WeatherCard";
import { FaLocationArrow } from "react-icons/fa";
import { GlobalStateContext } from "../context";
import { TempButton } from "./TempButton";

const MainWeather = () => {
  const {
    state: { temperature, current_weather, forecast },
    dispatch,
  } = useContext(GlobalStateContext);

  return (
    <section className="py-4 px-5 lg:px-14 xl:px-32 flex-grow">
      <div className="flex justify-end items-center space-x-3 mb-10">
        <TempButton
          onPress={() => dispatch({ type: "SET_CELCIUS" })}
          active={temperature === "CELCIUS"}
        >
          &deg;C
        </TempButton>
        <TempButton
          onPress={() => dispatch({ type: "SET_FAHRENHEIT" })}
          active={temperature === "FAHRENHEIT"}
        >
          &deg;F
        </TempButton>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 lg:gap-7 mb-10">
        {forecast.map((item, index) => {
          if (index === 0) return;
          return (
            <WeatherCard
              date={index === 1 ? "Tomorrow" : item.date}
              maxTemp={{ celcius: item.maxtemp_c, fahrenheit: item.maxtemp_f }}
              minTemp={{ celcius: item.mintemp_c, fahrenheit: item.mintemp_f }}
            />
          );
        })}
      </div>

      <div>
        <h2 className="text-greyw font-bold text-2xl mb-4">
          Today's Highlights
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <HighlightCard>
            <h3 className="text-greyw font-medium">Wind Status</h3>
            <h1 className="font-bold text-6xl text-greyw">
              {current_weather.wind_mph}
              <span className="font-medium text-4xl">mph</span>
            </h1>
            <div className="flex justify-between items-center text-greyw text-sm">
              <div className="flex items-center justify-center w-7 h-7 bg-[#6E707A] rounded-full mr-2">
                <FaLocationArrow />
              </div>
              <p>{current_weather.wind_dir}</p>
            </div>
          </HighlightCard>
          <HighlightCard>
            <h3 className="text-greyw font-medium">Humidity</h3>
            <h1 className="font-bold text-6xl text-greyw">
              {current_weather.humidity}
              <span className="font-medium text-4xl">%</span>
            </h1>
            <div className="flex justify-between items-center text-[#A09FB1] text-sm w-4/5">
              <p>0</p>
              <p>50</p>
              <p>100</p>
            </div>
            <div className="bg-greyw rounded-full w-4/5 h-2">
              <div
                className={`bg-[#FFEC65] rounded-full w-[${current_weather.humidity}%] h-2`}
              ></div>
            </div>
            <p className="w-4/5 text-end text-[#A09FB1]">%</p>
          </HighlightCard>
          <HighlightCard>
            <h3 className="text-greyw font-medium">Visibility</h3>
            <h1 className="font-bold text-6xl text-greyw mt-3">
              {current_weather.vis_miles}
              <span className="font-medium text-4xl">miles</span>
            </h1>
          </HighlightCard>
          <HighlightCard>
            <h3 className="text-greyw font-medium">Air Pressure</h3>
            <h1 className="font-bold text-6xl text-greyw mt-3">
              {current_weather.pressure_mb}
              <span className="font-medium text-4xl"> mb</span>
            </h1>
          </HighlightCard>
        </div>
      </div>
    </section>
  );
};

export default MainWeather;
