import axios from "axios";

export const getWeatherReport = async (lat: number, long: number) => {
  try {
    const response = await axios.get(
      "https://api.weatherapi.com/v1/forecast.json",
      {
        params: {
          key: import.meta.env.VITE_WEATHER_API_KEY,
          q: `${lat},${long}`,
          days: 6,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
