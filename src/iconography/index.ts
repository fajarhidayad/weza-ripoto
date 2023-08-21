import ClearIcon from "../assets/img/Clear.png";
import HailIcon from "../assets/img/Hail.png";
import HeavyCloudIcon from "../assets/img/HeavyCloud.png";
import HeavyRainIcon from "../assets/img/HeavyRain.png";
import LightCloudIcon from "../assets/img/LightCloud.png";
import LightRainIcon from "../assets/img/LightRain.png";
import ShowerIcon from "../assets/img/Shower.png";
import SleetIcon from "../assets/img/Sleet.png";
import SnowIcon from "../assets/img/Snow.png";
import ThunderstormIcon from "../assets/img/Thunderstorm.png";

export const getIcon = (type: string) => {
  switch (type) {
    case "Clear":
      return ClearIcon;
    case "Hail":
      return HailIcon;
    case "HeavyCloud":
      return HeavyCloudIcon;
    case "HeavyRain":
      return HeavyRainIcon;
    case "LightCloud":
      return LightCloudIcon;
    case "LightRain":
      return LightRainIcon;
    case "Shower":
      return ShowerIcon;
    case "Sleet":
      return SleetIcon;
    case "Snow":
      return SnowIcon;
    case "Thunderstorm":
      return ThunderstormIcon;
    default:
      return "";
  }
};
