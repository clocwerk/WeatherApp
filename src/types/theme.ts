export enum ThemeActionTypes {
  SET_THEME = "SET_THEME",
}

export interface SetThemeAction {
  type: ThemeActionTypes.SET_THEME;
  payload: string;
}

export type ThemeAction = SetThemeAction;

export interface ThemeState {
  theme: string;
}
