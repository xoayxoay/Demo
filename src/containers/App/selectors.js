import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = (state) => state.global || initialState;

export const makeSelectGlobal = () =>
  createSelector(selectGlobal, (state) => state);

export const makeSelectIsDarkMode = () =>
  createSelector(selectGlobal, (state) => state.darkMode);
