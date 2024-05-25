import React from "react";
import { useDispatch } from "react-redux";

import { fetchWeather, unitsSwap } from "../../../data/actions";
import { useSelector } from "react-redux";

import "./btn.scss";

function Button() {
  const dispatch = useDispatch();

  const units = useSelector((state) => state.units);

  const handleClick = () => {
    const newUnits = units === "metric" ? "imperial" : "metric";
    dispatch(unitsSwap(newUnits));
    dispatch(fetchWeather());
  };

  return (
    <button
      onClick={handleClick}
      className={
        units === "metric" ? "button button_imperial" : "button  button_celsius"
      }>
      F &nbsp;&nbsp; C
    </button>
  );
}

export default Button;
