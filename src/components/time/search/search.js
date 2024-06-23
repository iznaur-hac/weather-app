import React from "react";
import "./search.scss";
import locate from "../../../assets/icons/Frame.png";
import { useState } from "react";
import { cityNaming, fetchWeather } from "../../../data/actions";
import { useDispatch } from "react-redux";

function Search() {
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleCityChange = (e) => {
    setCityName(e.target.value);
    setError(false);
  };

  const handleSearch = () => {
    dispatch(cityNaming(cityName.trim()));
    dispatch(fetchWeather());
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <form className="search" action="#" onSubmit={handleSearch}>
      <img src={locate} alt="locate" />

      <input
        type="text"
        value={cityName}
        onChange={handleCityChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter city name"
        className="search__input"
      />
      <div className="search__img">
        <input type="submit" className="search__btn" value="" />
      </div>
    </form>
  );
}

export default Search;
