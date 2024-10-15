import { combineReducers } from "redux";
import { weatherReducer } from "./reducers/weatherReducer";
import { themeReducer } from "./reducers/themeReducer";

export const rootReducer = combineReducers({
  weather: weatherReducer,
  theme: themeReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
