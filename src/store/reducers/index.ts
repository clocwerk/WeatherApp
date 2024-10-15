import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../index";

export const store = configureStore({
  reducer: rootReducer,
});
export type AppDispatch = typeof store.dispatch;
