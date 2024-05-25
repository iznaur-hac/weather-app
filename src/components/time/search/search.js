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
    if (cityName.trim() === "") {
      setError(true);
    } else {
      dispatch(cityNaming(cityName));
      dispatch(fetchWeather());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <form className="search">
      <img src={locate} alt="locate" />
      <input
        type="text"
        value={cityName}
        onChange={handleCityChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter city name"
        className="search__input"
      />

      <button className="search__btn" onClick={handleSearch}>
        <div className="search__img"></div>
      </button>
    </form>
  );
}

export default Search;
