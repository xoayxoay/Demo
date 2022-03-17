/*
 *
 * HomePage actions
 *
 */

import {
  REQUEST_TOTAL_OVERVIEWS,
  SET_TOTAL_OVERVIEWS,
  REQUEST_CIDS,
  SET_IS_LOADING_CIDS,
  SET_CIDS,
  REQUEST_TRANSACTIONS,
  SET_IS_LOADING_TRANSACTIONS,
  SET_TRANSACTIONS,
} from './constants';

export function requestTotalOverviews() {
  return {
    type: REQUEST_TOTAL_OVERVIEWS,
  };
}

export function setTotalOverviews(totalOverviews) {
  return {
    type: SET_TOTAL_OVERVIEWS,
    totalOverviews,
  };
}

export function requestCids() {
  return {
    type: REQUEST_CIDS,
  };
}

export function setIsLoadingCids(isLoadingCids) {
  return {
    type: SET_IS_LOADING_CIDS,
    isLoadingCids,
  };
}

export function setCids(cids) {
  return {
    type: SET_CIDS,
    cids,
  };
}

export function requestTransactions() {
  return {
    type: REQUEST_TRANSACTIONS,
  };
}

export function setIsLoadingTransactions(isLoadingTransactions) {
  return {
    type: SET_IS_LOADING_TRANSACTIONS,
    isLoadingTransactions,
  };
}

export function setTransactions(transactions) {
  return {
    type: SET_TRANSACTIONS,
    transactions,
  };
}
