import React from "react";
import moment from "moment";
import { weatherIcon } from "../assets/weatherCodes";
import { getIcon } from "../iconography";

interface DailyCardProps {
  date: string;
  code: number;
  minTemp: string | number;
  maxTemp: string | number;
  measurement: string;
}

const DailyCard: React.FC<DailyCardProps> = (props) => {
  const today = new Date();
  const day = moment(props.date).isSame(today, "day")
    ? "Today"
    : moment(today).add(1, "day").isSame(props.date, "day")
    ? "Tomorrow"
    : moment(props.date).format("ddd, D MMM");

  const icon = weatherIcon.find((item) => item.code === props.code);
  const iconSrc = getIcon(icon!.icon);

  return (
    <div className="px-5 py-4 bg-primary flex flex-col items-center space-y-5 justify-between">
      <h3>{day}</h3>
      <img src={iconSrc} alt="weather-icon" width={75} />
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
