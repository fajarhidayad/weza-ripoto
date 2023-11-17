import React from 'react';
import { motion } from 'framer-motion';
import { FaLocationArrow } from 'react-icons/fa6';
import DailyCard from './DailyCard';
import HighlightCard from './HighlightCard';
import { MeasurementContext } from '../hooks/MeasurementContextProvider';
import { WeatherContext } from '../hooks/WeatherProvider';
import { CurrentWeatherType, ForecastDayType } from '../api/types';

const MainTab = () => {
  const measurementContext = React.useContext(MeasurementContext);
  const weatherContext = React.useContext(WeatherContext);

  return (
    <motion.section
      initial={{ opacity: 0, translateY: 30 }}
      transition={{ duration: 0.35, delay: 0.85 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="pt-6 flex-1 px-4 lg:px-10 xl:px-20 pb-4"
    >
      <ButtonTab
        changeMeasurement={measurementContext!.changeMeasurement}
        measurement={measurementContext!.measurement}
      />
      <DailyTab
        measurement={measurementContext!.measurement}
        forecast={weatherContext!.weatherData!.forecast}
      />

      <h1 className="text-2xl font-bold mb-5">Today's Highlights</h1>
      <HighlightTab {...weatherContext?.weatherData?.current} />
    </motion.section>
  );
};

const ButtonTab = (props: {
  measurement: 'C' | 'F';
  changeMeasurement: (type: 'C' | 'F') => void;
}) => {
  const activeButtonClass = 'bg-t-light text-dark';
  const inactiveButtonClass = 'text-t-light bg-[#585676]';

  const buttonCheck = (type: 'C' | 'F') => {
    return type === props.measurement ? activeButtonClass : inactiveButtonClass;
  };

  return (
    <div className="flex justify-end items-center mb-6 space-x-3">
      <button
        className={`w-10 h-10 rounded-full font-bold text-lg ${buttonCheck(
          'C'
        )}`}
        onClick={() => props.changeMeasurement('C')}
      >
        &deg;C
      </button>
      <button
        className={`w-10 h-10 rounded-full font-bold text-lg ${buttonCheck(
          'F'
        )}`}
        onClick={() => props.changeMeasurement('F')}
      >
        &deg;F
      </button>
    </div>
  );
};

const DailyTab = (props: {
  measurement: 'C' | 'F';
  forecast: ForecastDayType[];
}) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-5 mb-8">
      {props.forecast.map((item) => (
        <DailyCard
          key={item.date}
          date={item.date}
          measurement={props.measurement}
          maxTemp={props.measurement === 'C' ? item.maxtemp_c : item.maxtemp_f}
          minTemp={props.measurement === 'C' ? item.mintemp_c : item.mintemp_f}
          code={item.code}
        />
      ))}
    </div>
  );
};

const HighlightTab: React.FC<Partial<CurrentWeatherType>> = (props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 xl:gap-6">
      <HighlightCard
        title="Wind status"
        subtitle={props.wind_mph}
        measure="mph"
      >
        <div className="flex items-center space-x-3">
          <div className="bg-t-dark rounded-full p-2">
            <FaLocationArrow />
          </div>
          <p>{props.wind_dir}</p>
        </div>
      </HighlightCard>
      <HighlightCard title="Humidity" subtitle={props.humidity} measure="%">
        <div className="w-4/5">
          <div className="flex justify-between items-center text-xs text-t-dark mb-1">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <div className="bg-white rounded-full h-2 ">
            <div
              className="bg-yellow-300 h-2 rounded-full"
              style={{ width: `${props.humidity}%` }}
            />
          </div>
        </div>
      </HighlightCard>
      <HighlightCard
        title="Visibility"
        subtitle={props.vis_miles}
        measure="miles"
      />
      <HighlightCard
        title="Air Pressure"
        subtitle={props.pressure_mb}
        measure="mb"
      />
    </div>
  );
};

export default MainTab;
