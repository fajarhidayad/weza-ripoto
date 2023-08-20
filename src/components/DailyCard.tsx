import React from "react";
import SleetIcon from "../assets/img/Sleet.png";

interface DailyCardProps {
  date: string;
  minTemp: string | number;
  maxTemp: string | number;
  measurement: string;
}

const DailyCard: React.FC<DailyCardProps> = (props) => {
  return (
    <div className="px-5 py-4 bg-primary flex flex-col items-center space-y-5 justify-between">
      <h3>{props.date}</h3>
      <img src={SleetIcon} alt="weather-icon" width={75} />
      <div className="flex items-center justify-between space-x-8">
        <p>
          {props.maxTemp}&deg;{props.measurement}
        </p>
        <p className="text-t-dark">
          {props.minTemp}&deg;{props.measurement}
        </p>
      </div>
    </div>
  );
};

export default DailyCard;
