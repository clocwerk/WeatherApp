export interface WeatherLocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime: string;
}
export interface WeatherCondition {
  text: string;
  icon: string;
}

export interface CurrentWeather {
  temp_c: number;
  condition: WeatherCondition;
}

export interface ForecastHour {
  date_epoch: number;
  time: string;
  temp_c: number;
  condition: WeatherCondition;
}

export interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: WeatherCondition;
  };
  hour: ForecastHour[];
}

export interface WeatherForecast {
  location: WeatherLocation;
  current: CurrentWeather;
  forecast: {
    forecastday: ForecastDay[];
  };
}
export interface WeatherState {
  weather: WeatherForecast[];
  loading: boolean;
  error: null | string;
  page: number;
  days: number;
}
export enum WeatherActionTypes {
  FETCH_WEATHER = "FETCH_WEATHER",
  FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS",
  FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR",
  SET_WEATHER_DAY = "SET_WEATHER_DAY",
}
interface FetchWeatherAction {
  type: WeatherActionTypes.FETCH_WEATHER;
}
interface FetchWeatherSuccessAction {
  type: WeatherActionTypes.FETCH_WEATHER_SUCCESS;
  payload: any[];
}
interface FetchWeatherErrorAction {
  type: WeatherActionTypes.FETCH_WEATHER_ERROR;
  payload: string;
}
interface SetWeatherDay {
  type: WeatherActionTypes.SET_WEATHER_DAY;
  payload: number;
}
export type WeatherAction =
  | FetchWeatherAction
  | FetchWeatherSuccessAction
  | FetchWeatherErrorAction
  | SetWeatherDay;
