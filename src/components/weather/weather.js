import React from "react";
import "./weather.scss";

import cloud from "../../assets/WeatherIcon - 2-40.png";

import WeatherDate from "./weather__date";
import WeatherState from "./Weather__state";
import WeatherDays from "./slider/weather__days";
import Button from "./button/Button";

import { useSelector } from "react-redux";

function Weather() {
  const weather = useSelector((state) => state.weather);
  const units = useSelector((state) => state.units);

  return (
    <div className="weather">
      <img className="weather__cloud" src={cloud} alt="cloud" />

      <div
        className={`weather__temp ${
          units === "metric" ? "weather__temp_c" : "weather__temp_f"
        }`}>
        {Math.round(weather?.main?.temp)}
      </div>

      <WeatherDate />

      <WeatherState />

      <WeatherDays />

      <Button />
    </div>
  );
}

export default Weather;
