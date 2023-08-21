import axios from "axios";

const BASEURL = import.meta.env.VITE_WEATHER_BASE_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export interface CurrentWeatherType {
  temp_c: number;
  temp_f: number;
  condition_text: string;
  condition_code: number;
  wind_dir: string;
  wind_mph: number;
  humidity: number;
  vis_miles: number;
  pressure_mb: number;
}

export interface WeatherData {
  cityName: string;
  localTime: string;
  country: string;
  current: CurrentWeatherType;
  forecast: ForecastDayType[];
}

export interface ForecastDayType {
  date: string;
  mintemp_c: number;
  mintemp_f: number;
  maxtemp_c: number;
  maxtemp_f: number;
  code: number;
}

interface ForecastType {
  date: string;
  day: {
    mintemp_c: number;
    mintemp_f: number;
    maxtemp_c: number;
    maxtemp_f: number;
    condition: {
      code: number;
    };
  };
}

export const getWeatherReport = async (latitude: number, longitude: number) => {
  try {
    const response = await axios.get(BASEURL, {
      params: {
        key: API_KEY,
        q: `${latitude},${longitude}`,
        days: 5,
      },
    });
    const { location, current, forecast } = response.data;
    const forecastDays = forecast.forecastday.map((item: ForecastType) => ({
      mintemp_c: item.day.mintemp_c,
      mintemp_f: item.day.mintemp_f,
      maxtemp_c: item.day.maxtemp_c,
      maxtemp_f: item.day.maxtemp_f,
      date: item.date,
      code: item.day.condition.code,
    }));

    return {
      cityName: location.name,
      localTime: location.localtime,
      country: location.country,
      forecast: forecastDays,
      current: {
        temp_c: current.temp_c,
        temp_f: current.temp_f,
        condition_text: current.condition.text,
        condition_code: current.condition.code,
        wind_dir: current.wind_dir,
        wind_mph: current.wind_mph,
        humidity: current.humidity,
        vis_miles: current.vis_miles,
        pressure_mb: current.pressure_mb,
      },
    };
  } catch (error) {
    console.error(error);
  }
};
