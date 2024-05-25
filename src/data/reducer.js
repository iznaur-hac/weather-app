import {
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  UNITS_SWAP,
  CITY_NAMING,
} from "./actions";

const initialState = {
  weather: {},
  loading: true,
  city: "berlin",
  units: "metric",
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.payload,
        loading: false,
      };

    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case UNITS_SWAP:
      return {
        ...state,
        units: action.payload,
      };

    case CITY_NAMING:
      return {
        ...state,
        city: action.payload,
      };

    default:
      return state;
  }
};

export default weatherReducer;
