import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Sun,
  Moon,
  CloudSun,
  CloudMoon,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudDrizzle,
  CloudFog,
  Thermometer,
  Wind,
  Droplets,
  Gauge,
} from "lucide-react";

interface WeatherData {
  city: string;
  weather: Array<{ description: string; icon: string; main: string }>;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
}

interface WeatherProps {
  data: WeatherData;
  onRefresh: () => Promise<void>;
}

const Weather: React.FC<WeatherProps> = ({ data, onRefresh }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const isDaytime = () => {
    const now = Date.now() / 1000; // current time in seconds
    return now > data.sys.sunrise && now < data.sys.sunset;
  };

  const getWeatherIcon = () => {
    const isDay = isDaytime();
    const weatherMain = data.weather[0].main.toLowerCase();

    switch (weatherMain) {
      case "clear":
        return isDay ? (
          <Sun className="h-12 w-12" />
        ) : (
          <Moon className="h-12 w-12" />
        );
      case "clouds":
        return isDay ? (
          <CloudSun className="h-12 w-12" />
        ) : (
          <CloudMoon className="h-12 w-12" />
        );
      case "rain":
        return <CloudRain className="h-12 w-12" />;
      case "snow":
        return <CloudSnow className="h-12 w-12" />;
      case "drizzle":
        return <CloudDrizzle className="h-12 w-12" />;
      case "mist":
      case "fog":
      case "haze":
        return <CloudFog className="h-12 w-12" />;
      default:
        return <Cloud className="h-12 w-12" />;
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await onRefresh();
    setIsRefreshing(false);
  };

  return (
    <Card className="bg-emerald-500 p-6 text-white">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          {getWeatherIcon()}
          <h2 className="text-2xl font-bold mt-2">{data.city}</h2>
          <p className="text-lg">{data.weather[0].description}</p>
        </div>
        <button
          className="bg-white rounded-lg px-4 py-2 text-emerald-600 hover:bg-emerald-50 transition-colors disabled:opacity-50"
          onClick={handleRefresh}
          disabled={isRefreshing}
        >
          {isRefreshing ? "রিফ্রেশ হচ্ছে..." : "রিফ্রেশ"}
        </button>
      </div>
      <div className="mt-6">
        <p className="text-5xl font-bold mb-6">
          {Math.round(data.main.temp)}°C
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <Thermometer className="h-5 w-5 mr-2" />
            <span>Feels like: {Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="flex items-center">
            <Wind className="h-5 w-5 mr-2" />
            <span>Wind: {data.wind.speed} km/h</span>
          </div>
          <div className="flex items-center">
            <Droplets className="h-5 w-5 mr-2" />
            <span>Humidity: {data.main.humidity}%</span>
          </div>
          <div className="flex items-center">
            <Gauge className="h-5 w-5 mr-2" />
            <span>Pressure: {data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Weather;
