import { Dispatch } from "redux";
import axios from "axios";
import { WeatherAction, WeatherActionTypes } from "../../types/weather";
import getCurrentLocation from "../../helpers/helpers";

export const fetchWeather = (days = 14) => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    try {
      dispatch({ type: WeatherActionTypes.FETCH_WEATHER });
      const { latitude, longitude } = await getCurrentLocation();
      const responce = await axios.get(
        "http://api.weatherapi.com/v1/forecast.json",
        {
          params: {
            key: "9462a8d9d4e54cd1862181752240910",
            q: `${latitude},${longitude}`,
            days: String(days),
            aqi: "no",
            alerts: "no",
          },
        }
      );
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
        payload: responce.data,
      });
    } catch (e) {
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_ERROR,
        payload: "error loading",
      });
    }
  };
};
export function setWeatherDay(day: number): WeatherAction {
  return { type: WeatherActionTypes.SET_WEATHER_DAY, payload: day };
}
