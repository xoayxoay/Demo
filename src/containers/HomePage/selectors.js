import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectState = (state) => state.homePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

export const makeSelectHomePage = () =>
  createSelector(selectState, (state) => state);

export const makeSelectTotalOverviews = () =>
  createSelector(selectState, (state) => state.totalOverviews);

export const makeSelectCids = () =>
  createSelector(selectState, (state) => state.cids);

export const makeSelectIsLoadingCids = () =>
  createSelector(selectState, (state) => state.isLoadingCids);

export const makeSelectTransactions = () =>
  createSelector(selectState, (state) => state.transactions);

export const makeSelectIsLoadingTransactions = () =>
  createSelector(selectState, (state) => state.isLoadingTransactions);
