import React from "react";
import "./weather.scss";
import { useSelector } from "react-redux";

function WeatherDate() {
  const weather = useSelector((state) => state.weather);

  const date = new Date((weather.dt + weather.timezone) * 1000);

  const dateMoth = () => {
    switch (date.getMonth()) {
      case 0:
        return "Jun";

      case 1:
        return "Feb";

      case 2:
        return "Mar";

      case 3:
        return "Apr";

      case 4:
        return "May";

      case 5:
        return "Jun";

      case 6:
        return "Jul";

      case 7:
        return "Aug";

      case 8:
        return "Sep";

      case 9:
        return "Oct";

      case 10:
        return "Nov";

      case 11:
        return "Dec";

      default:
        return `(._.')`;
    }
  };

  const dateDay = () => {
    switch (date.getDay()) {
      case 0:
        return "Sunday";

      case 1:
        return "Monday";

      case 2:
        return "Tuesday";

      case 3:
        return "Wednesday";

      case 4:
        return "Thursday";

      case 5:
        return "Friday";

      case 6:
        return "Saturday";

      default:
        return "):";
    }
  };

  console.log(date.getDay());

  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  hours = hours % 12;
  hours = hours ? hours : 12; // hour '0' should be '12'
  // const minutesStr = minutes < 10 ? "0" + minutes : minutes;
  const prepand = hours >= 12 ? "pm" : "am";

  return (
    <div className="weather__date">
      <p className="weather__text weather__text_fw-b">
        {date.getDate()}th {dateMoth()} ‘{date.getFullYear()}
      </p>
      <p className="weather__text weather__text_fw-m">
        {dateDay()} &nbsp; | &nbsp; {hours}:{minutes} {prepand}
      </p>
    </div>
  );
}

export default WeatherDate;
