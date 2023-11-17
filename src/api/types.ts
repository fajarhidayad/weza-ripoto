export interface CurrentWeatherType {
  temp_c: number;
  temp_f: number;
  condition_text: string;
  condition_code: number;
  wind_dir: string;
  wind_mph: number;
  humidity: number;
  vis_miles: number;
  pressure_mb: number;
}

export interface WeatherData {
  cityName: string;
  localTime: string;
  country: string;
  current: CurrentWeatherType;
  forecast: ForecastDayType[];
}

export interface ForecastDayType {
  date: string;
  mintemp_c: number;
  mintemp_f: number;
  maxtemp_c: number;
  maxtemp_f: number;
  code: number;
}

export interface ForecastType {
  date: string;
  day: {
    mintemp_c: number;
    mintemp_f: number;
    maxtemp_c: number;
    maxtemp_f: number;
    condition: {
      code: number;
    };
  };
}

export interface ApiResponse {
  location: {
    name: string;
    localtime: string;
    country: string;
  };
  current: CurrentWeatherType & { condition: { text: string; code: number } };
  forecast: ForecastType[];
}
