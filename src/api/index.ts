import axios from 'axios';
import { ApiResponse, WeatherData } from './types';

const BASEURL = import.meta.env.VITE_WEATHER_BASE_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const filterResponse = ({ location, current, forecast }: ApiResponse) => {
  const forecastDays = forecast.map((item) => ({
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
};

export const getWeatherReport = async (
  latitude: number,
  longitude: number
): Promise<WeatherData | null> => {
  try {
    const response = await axios.get(BASEURL, {
      params: {
        key: API_KEY,
        q: `${latitude},${longitude}`,
        days: 5,
      },
    });
    const { location, current, forecast } = response.data;
    const data = filterResponse({
      location,
      current,
      forecast: forecast.forecastday,
    });

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getWeatherLocation = async (
  locationPlace: string
): Promise<WeatherData | null> => {
  try {
    const response = await axios.get(BASEURL, {
      params: {
        key: API_KEY,
        q: locationPlace,
        days: 5,
      },
    });
    const { location, current, forecast } = response.data;
    const data = filterResponse({
      location,
      current,
      forecast: forecast.forecastday,
    });
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
