/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import {
  SET_TOTAL_OVERVIEWS,
  SET_IS_LOADING_CIDS,
  SET_CIDS,
  SET_IS_LOADING_TRANSACTIONS,
  SET_TRANSACTIONS,
} from '../constants';

export const initialState = {
  totalOverviews: {},
  cids: [],
  transactions: [],
  isLoadingCids: true,
  isLoadingTransactions: true,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_TOTAL_OVERVIEWS:
        draft.totalOverviews = action.totalOverviews;
        break;
      case SET_IS_LOADING_CIDS:
        draft.isLoadingCids = action.isLoadingCids;
        break;
      case SET_CIDS:
        draft.cids = action.cids;
        break;
      case SET_IS_LOADING_TRANSACTIONS:
        draft.transactions = action.transactions;
        break;
      case SET_TRANSACTIONS:
        draft.isLoadingTransactions = action.isLoadingTransactions;
        break;
    }
  });

export default homePageReducer;
