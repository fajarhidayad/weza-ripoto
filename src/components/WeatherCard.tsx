import React, { useContext } from "react";
import { GlobalStateContext } from "../context";
import * as dayjs from "dayjs";
import "dayjs/locale/en";

interface WeatherCardProps {
  date: string;
  maxTemp: {
    celcius: number;
    fahrenheit: number;
  };
  minTemp: {
    celcius: number;
    fahrenheit: number;
  };
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  date,
  maxTemp,
  minTemp,
}) => {
  const { state } = useContext(GlobalStateContext);
  const tempType = state.temperature === "CELCIUS" ? "C" : "F";
  const parsedDate =
    date !== "Tomorrow" ? dayjs(date).locale("en").format("ddd, DD MMM") : date;

  return (
    <div className="bg-secondary flex flex-col justify-between items-center text-greyw h-44 py-5 px-6 font-medium">
      <h3>{parsedDate}</h3>
      <img src="Shower.png" width={59} />
      <p className="space-x-4">
        <span>
          {state.temperature === "CELCIUS"
            ? maxTemp.celcius
            : maxTemp.fahrenheit}
          &deg;{tempType}
        </span>
        <span className="text-[#A09FB1]">
          {state.temperature === "CELCIUS"
            ? minTemp.celcius
            : minTemp.fahrenheit}
          &deg;{tempType}
        </span>
      </p>
    </div>
  );
};

export default WeatherCard;
