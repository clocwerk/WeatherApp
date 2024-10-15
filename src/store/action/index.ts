import * as WeatherActionCreators from "./weather";
import * as ThemeActionsCreators from "./theme";

export default {
  ...WeatherActionCreators,
  ...ThemeActionsCreators,
};
