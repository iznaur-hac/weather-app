import axios from "axios";

export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";
export const UNITS_SWAP = "UNITS_SWAP";
export const CITY_NAMING = "CITY_NAMING";

export const fetchWeatherRequest = () => ({
  type: FETCH_WEATHER_REQUEST,
});

export const fetchWeatherSuccess = (data) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: data,
});

export const fetchWeatherFailure = (error) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error,
});

export const unitsSwap = (units) => ({
  type: UNITS_SWAP,
  payload: units,
});

export const cityNaming = (city) => ({
  type: CITY_NAMING,
  payload: city,
});

export const fetchWeather = () => {
  return (dispatch, getState) => {
    const units = getState().units;
    const city = getState().city;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1b5b5590b6a7bbf11bd07c8ade4dd733&units=${units}`
      )
      .then((response) => {
        console.log("data");
        console.log(response.data);
        return dispatch(fetchWeatherSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchWeatherFailure());
        console.log(error);
      });
  };
};
