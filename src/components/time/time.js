import React from "react";
import SunCalc from "suncalc";

import { useSelector } from "react-redux";

import "./time.scss";

import Search from "./search/search";
import hour from "../../assets/icons/hour.svg";
import Info from "./time__info/time__info";

function Time() {
  const time = useSelector((state) => state.weather);

  const convertUnixTo12HourFormat = (unixTime) => {
    const date = new Date((unixTime + time.timezone) * 1000);
    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12; // hour '0' should be '12'
    const minutesStr = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutesStr}`;
  };

  const currentTime = convertUnixTo12HourFormat(time.dt);

  const sunriseTime = convertUnixTo12HourFormat(time.sys.sunrise);
  const sunriseTimeSub = convertUnixTo12HourFormat(time.sys.sunrise + 600);

  const sunsetTime = convertUnixTo12HourFormat(time.sys.sunset);
  const sunsetTimeSub = convertUnixTo12HourFormat(time.sys.sunset + 600);

  const goldenHour = convertUnixTo12HourFormat(time.sys.sunrise + 3600);
  const goldenHourEnd = convertUnixTo12HourFormat(time.sys.sunset - 3600);

  return (
    <div className="wrapper">
      <div className="time time-contayner">
        <Search />

        <div className="time__hours">
          <div className="time__box">
            <p>Sunrise</p>
            <div className="time__hour">
              <img src={hour} alt="hour" />

              <p className="time__hour-title">{sunriseTime}</p>

              <p className="time__hour-subtitle">{sunriseTimeSub}</p>
            </div>
          </div>

          <div className="time__box time__box_big">
            <p>Golden Hour</p>
            <div className="time__hour time__hour_big">
              <img src={hour} alt="hour" />

              <p className="time__hour-title">
                {goldenHour}
                <span>&nbsp;AM</span>
              </p>

              <p className="time__hour-subtitle">
                {goldenHourEnd}
                <span>&nbsp;PM</span>
              </p>
            </div>
          </div>

          <div className="time__box ">
            <p>Sunset</p>
            <div className="time__hour">
              <img src={hour} alt="hour" />

              <p className="time__hour-title">{sunsetTime}</p>

              <p className="time__hour-subtitle">{sunsetTimeSub}</p>
            </div>
          </div>
        </div>

        <Info />
      </div>
    </div>
  );
}

export default Time;
