import { ThemeAction, ThemeActionTypes, ThemeState } from "../../types/theme";

const initialState: ThemeState = {
  theme: "dark",
};

export const themeReducer = (
  state = initialState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case ThemeActionTypes.SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
