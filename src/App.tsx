import { useContext, useEffect, useState } from "react";
import MainWeather from "./components/MainWeather";
import Sidebar from "./components/Sidebar";
import { GlobalStateContext } from "./context";
import { getWeatherReport } from "./helper";

function App() {
  const [coords, setCoords] = useState<{ latitude: number; longitude: number }>(
    { latitude: 0, longitude: 0 }
  );

  const { dispatch } = useContext(GlobalStateContext);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setCoords(pos.coords);
      });
    } else {
      console.log("Geolocation tidak tersedia pada browser ini.");
    }
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeatherReport(coords.latitude, coords.longitude);
      const forecast = data.forecast.forecastday.map((item: any) => ({
        date: item.date,
        maxtemp_c: item.day.maxtemp_c,
        maxtemp_f: item.day.maxtemp_f,
        mintemp_c: item.day.mintemp_c,
        mintemp_f: item.day.mintemp_f,
        icon: item.day.condition.icon,
      }));

      dispatch({
        type: "SET_CURRENT_WEATHER",
        payload: {
          current_weather: {
            condition: data.current.condition.text,
            humidity: data.current.humidity,
            location: data.location.name,
            pressure_mb: data.current.pressure_mb,
            temp_c: data.current.temp_c,
            temp_f: data.current.temp_f,
            vis_miles: data.current.vis_miles,
            wind_dir: data.current.wind_dir,
            wind_mph: data.current.wind_mph,
          },
          forecast,
        },
      });
    };

    if (coords.latitude !== 0 && coords.longitude !== 0) {
      fetchWeather().catch((e) => console.error(e));
    }
  }, [coords]);

  return (
    <main className="bg-[#100E1D] min-h-screen flex flex-col lg:flex-row mx-auto">
      <Sidebar />
      <MainWeather />
    </main>
  );
}

export default App;
