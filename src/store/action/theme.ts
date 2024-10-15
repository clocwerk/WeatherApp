import { ThemeAction, ThemeActionTypes } from "../../types/theme";

export const setTheme = (theme: string): ThemeAction => {
  return { type: ThemeActionTypes.SET_THEME, payload: theme };
};
