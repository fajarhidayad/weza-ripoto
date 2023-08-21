import { createContext, ReactNode, useState } from "react";
import type { WeatherData } from "../api";

interface WeatherContextType {
  weatherData: WeatherData | undefined;
  setWeatherData: (data: WeatherData) => void;
}

export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined
);

const WeatherContextProvider = (props: { children: ReactNode }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>(
    undefined
  );

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
