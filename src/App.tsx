import { ImSpinner2 } from 'react-icons/im';
import MainTab from './components/MainTab';
import Sidebar from './components/Sidebar/Sidebar';
import useGetWeather from './hooks/useGetWeather';

const App = () => {
  const { isLoading, latlong } = useGetWeather();

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
