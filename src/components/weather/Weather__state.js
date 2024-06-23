import React from "react";
import "./weather.scss";
import cloud from "../../assets/icons/Group 656.svg";
import drop from "../../assets/icons/drop.svg";
import locate from "../../assets/icons/Vector.svg";
import { useSelector } from "react-redux";

function WeatherState() {
  const weather = useSelector((state) => state.weather);
  const units = useSelector((state) => state.units);

  return (
    <div className="weather__states">
      <div className="weather__state">
        <img src={locate} alt="locate" />
        <p>Wind</p>
        <p className="weather__state-midle">
          &ensp;{Math.round(weather?.wind?.speed)}
          &nbsp;{units === "metric" ? "km/h" : "m/h"}
        </p>
      </div>
      |
      <div className="weather__state">
        <img src={drop} alt="locate" />
        <p>Hum</p>
        <p className="weather__state-midle">
          &ensp;{weather?.main?.humidity} %
        </p>
      </div>
      |
      <div className="weather__state">
        <img src={cloud} alt="locate" />
        <p>Rain</p>
        <p className="weather__state-midle">
          &ensp;{weather?.weather?.[0]?.description}
        </p>
      </div>
    </div>
  );
}

export default WeatherState;
