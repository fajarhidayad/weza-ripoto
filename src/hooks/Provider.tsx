import React from "react";
import MeasurementContextProvider from "./MeasurementContextProvider";
import WeatherContextProvider from "./WeatherProvider";

const Provider = (props: { children: React.ReactNode }) => {
  return (
    <WeatherContextProvider>
      <MeasurementContextProvider>{props.children}</MeasurementContextProvider>
    </WeatherContextProvider>
  );
};

export default Provider;
