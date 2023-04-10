import React, { createContext, useReducer } from "react";
import { GlobalState, GlobalStateAction } from "./types";

const initialState: GlobalState = {
  temperature: "CELCIUS",
  current_weather: {
    temp_c: 0,
    temp_f: 0,
    condition: "",
    location: "",
    wind_mph: 0,
    wind_dir: "",
    humidity: 0,
    vis_miles: 0,
    pressure_mb: 0,
  },
  forecast: [],
};

export const GlobalStateContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<GlobalStateAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

function globalStateReducer(
  state: GlobalState,
  action: GlobalStateAction
): GlobalState {
  switch (action.type) {
    case "SET_CELCIUS":
      return { ...state, temperature: "CELCIUS" };
    case "SET_FAHRENHEIT":
      return { ...state, temperature: "FAHRENHEIT" };
    case "SET_CURRENT_WEATHER":
      const { current_weather, forecast } = action.payload;
      return {
        ...state,
        current_weather,
        forecast,
      };
    default:
      return state;
  }
}

export const GlobalStateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
