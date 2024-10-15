import {
  WeatherAction,
  WeatherActionTypes,
  WeatherState,
} from "../../types/weather";
const initialState: WeatherState = {
  weather: [],
  page: 2,
  error: null,
  days: 1,
  loading: false,
};

export const weatherReducer = (
  state = initialState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER:
      return { ...state, loading: true };
    case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: Array.isArray(action.payload)
          ? action.payload
          : [action.payload],
      };
    case WeatherActionTypes.FETCH_WEATHER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case WeatherActionTypes.SET_WEATHER_DAY:
      return { ...state, days: action.payload };
    default:
      return state;
  }
};
