import Sidebar from "./components/Sidebar";
import MainTab from "./components/MainTab";
import { useCallback, useContext, useEffect, useState } from "react";
import { getWeatherReport } from "./api";
import { WeatherContext } from "./hooks/WeatherProvider";
import { ImSpinner2 } from "react-icons/im";

const App = () => {
  const weatherContext = useContext(WeatherContext);
  const [latlong, setLatLong] = useState<
    { latitude: number; longitude: number } | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const getWeatherData = useCallback(
    async (lat: number, long: number) => {
      const data = await getWeatherReport(lat, long);
      weatherContext?.setWeatherData(data!);
      setIsLoading(false);
    },
    [weatherContext]
  );

  useEffect(() => {
    if (latlong) {
      getWeatherData(latlong.latitude, latlong.longitude);
    } else {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLatLong({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
        },
        (err) => {
          if (err.code == err.PERMISSION_DENIED) {
            setErrorMessage(
              "Permission Denied. This app cannot run without access of your location"
            );
            setIsLoading(false);
          }
        }
      );
    }
  }, [latlong, getWeatherData]);

  if (isLoading && !errorMessage) {
    return (
      <main className="bg-dark min-h-screen text-t-light flex items-center justify-center">
        <ImSpinner2 size={35} className="animate-spin" />
      </main>
    );
  }

  if (!latlong) {
    return (
      <main className="bg-dark min-h-screen text-t-light flex items-center justify-center">
        <h1 className="text-center text-xl max-w-[800px] mx-3">
          This website uses your location to provide you with personalized
          experiences and relevant information. By allowing access to your
          location, you can enjoy features to get weather forecasts and
          conditions specific to your area.
        </h1>
      </main>
    );
  }

  return (
    <main className="bg-dark min-h-screen text-t-light flex flex-col lg:flex-row">
      <Sidebar />
      <MainTab />
    </main>
  );
};

export default App;
