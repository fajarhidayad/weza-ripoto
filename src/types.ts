export interface CurrentWeather {
  temp_c: number;
  temp_f: number;
  condition: string;
  location: string;
  wind_mph: number;
  wind_dir: string;
  humidity: number;
  vis_miles: number;
  pressure_mb: number;
}

export interface ForecastDay {
  date: string;
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  icon: string;
}

export interface GlobalState {
  temperature: "CELCIUS" | "FAHRENHEIT";
  current_weather: CurrentWeather;
  forecast: ForecastDay[];
}

export type GlobalStateAction =
  | {
      type: "SET_CELCIUS";
    }
  | { type: "SET_FAHRENHEIT" }
  | {
      type: "SET_CURRENT_WEATHER";
      payload: { current_weather: CurrentWeather; forecast: ForecastDay[] };
    };
