import { SET_IS_DARK_MODE } from './constants';

export const setDarkMode = (isDark) => ({
  type: SET_IS_DARK_MODE,
  isDark,
});
