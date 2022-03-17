/* eslint-disable no-param-reassign */
import produce from 'immer';
import { SET_IS_DARK_MODE } from '../constants';

const isDarkMode = localStorage.getItem('isDark');

export const initialState = {
  user: {},
  language: 'en-US',
  darkMode: isDarkMode === 'true',
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case SET_IS_DARK_MODE:
        localStorage.setItem('isDark', action.isDark);
        draft.darkMode = action.isDark;
        break;
    }
  });
