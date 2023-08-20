import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import DailyCard from "./DailyCard";
import HighlightCard from "./HighlightCard";
import { MeasurementContext } from "../hooks/MeasurementContextProvider";

const MainTab = () => {
  const measurementContext = React.useContext(MeasurementContext);

  return (
    <section className="pt-10 flex-1 px-10 xl:px-20">
      <ButtonTab
        changeMeasurement={measurementContext!.changeMeasurement}
        measurement={measurementContext!.measurement}
      />
      <DailyTab measurement={measurementContext!.measurement} />

      <h1 className="text-2xl font-bold mb-8">Today's Highlights</h1>
      <HighlightTab />
    </section>
  );
};

const ButtonTab = (props: {
  measurement: "C" | "F";
  changeMeasurement: (type: "C" | "F") => void;
}) => {
  const activeButtonClass = "bg-t-light text-dark";
  const inactiveButtonClass = "text-t-light bg-[#585676]";

  const buttonCheck = (type: "C" | "F") => {
    return type === props.measurement ? activeButtonClass : inactiveButtonClass;
  };

  return (
    <div className="flex justify-end items-center mb-16 space-x-3">
      <button
        className={`w-10 h-10 rounded-full font-bold text-lg ${buttonCheck(
          "C"
        )}`}
        onClick={() => props.changeMeasurement("C")}
      >
        &deg;C
      </button>
      <button
        className={`w-10 h-10 rounded-full font-bold text-lg ${buttonCheck(
          "F"
        )}`}
        onClick={() => props.changeMeasurement("F")}
      >
        &deg;F
      </button>
    </div>
  );
};

const DailyTab = (props: { measurement: string }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 xl:gap-5 mb-14">
      <DailyCard
        date="Tomorrow"
        minTemp={11}
        maxTemp={16}
        measurement={props.measurement}
      />
      <DailyCard
        date="Tomorrow"
        minTemp={11}
        maxTemp={16}
        measurement={props.measurement}
      />
      <DailyCard
        date="Tomorrow"
        minTemp={11}
        maxTemp={16}
        measurement={props.measurement}
      />
      <DailyCard
        date="Tomorrow"
        minTemp={11}
        maxTemp={16}
        measurement={props.measurement}
      />
      <DailyCard
        date="Tomorrow"
        minTemp={11}
        maxTemp={16}
        measurement={props.measurement}
      />
    </div>
  );
};

const HighlightTab = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 xl:gap-6">
      <HighlightCard title="Wind status" subtitle="7" measure="mph">
        <div className="flex items-center space-x-3">
          <div className="bg-t-dark rounded-full p-2">
            <FaLocationArrow />
          </div>
          <p>WSW</p>
        </div>
      </HighlightCard>
      <HighlightCard title="Humidity" subtitle="84" measure="%">
        <div className="w-4/5">
          <div className="flex justify-between items-center text-xs text-t-dark mb-1">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <div className="bg-white rounded-full h-2 ">
            <div
              className="bg-yellow-200 h-2 rounded-full"
              style={{ width: `${84}%` }}
            />
          </div>
        </div>
      </HighlightCard>
      <HighlightCard title="Visibility" subtitle="6,4" measure="miles" />
      <HighlightCard title="Air Pressure" subtitle="998" measure="mb" />
    </div>
  );
};

export default MainTab;
