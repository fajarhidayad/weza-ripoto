import Sidebar from './components/Sidebar/Sidebar';
import MainTab from './components/MainTab';
import { useCallback, useContext, useEffect, useState } from 'react';
import { getWeatherReport } from './api';
import { WeatherContext } from './hooks/WeatherProvider';
import { ImSpinner2 } from 'react-icons/im';

const App = () => {
  const weatherContext = useContext(WeatherContext);
  const [latlong, setLatLong] = useState<
    { latitude: number; longitude: number } | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const getWeatherData = useCallback(
    async (lat: number, long: number) => {
      const data = await getWeatherReport(lat, long);
      weatherContext?.setWeatherData(data!);
      setIsLoading(false);
    },
    [weatherContext]
  );

  useEffect(() => {
    if (latlong && isLoading) {
      getWeatherData(latlong.latitude, latlong.longitude);
    } else if (!latlong && isLoading) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLatLong({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
        },
        (err) => {
          if (err.code == err.PERMISSION_DENIED) {
            setIsLoading(false);
          }
        }
      );
    }
  }, [latlong, isLoading, getWeatherData]);

  if (isLoading) {
    return (
      <main className="bg-dark min-h-screen text-t-light flex items-center justify-center">
        <ImSpinner2 size={35} className="animate-spin" />
      </main>
    );
  }

  if (!latlong) {
    return (
      <main className="bg-dark min-h-screen text-t-light flex flex-col items-center justify-center">
        <h1 className="text-center text-xl max-w-[800px] mx-3 mb-5">
          This website uses your location to provide you with personalized
          experiences and relevant information. By allowing access to your
          location, you can enjoy features to get weather forecasts and
          conditions specific to your area.
        </h1>
        <p className="text-center max-w-[600px] mx-3 mb-2">
          Already activated?
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-t-dark rounded px-4 py-3 shadow"
        >
          Click to reload page
        </button>
      </main>
    );
  }

  return (
    <main className="bg-dark min-h-[100svh] text-t-light flex flex-col lg:flex-row">
      <Sidebar />
      <MainTab />
    </main>
  );
};

export default App;
