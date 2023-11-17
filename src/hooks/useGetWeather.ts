import { useCallback, useContext, useEffect, useState } from 'react';
import { WeatherContext } from './WeatherProvider';
import { getWeatherReport } from '@/api';

export default function useGetWeather() {
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

  return { isLoading, latlong, setLatLong };
}
