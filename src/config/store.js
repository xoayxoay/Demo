import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import { connectRouter } from 'connected-react-router';

import globalReducer from 'containers/App/reducer';
import history from 'utils/history';

function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}

export default () => {
  const composeEnhancers = compose;
  const sagaMiddleware = createSagaMiddleware();
  const runSaga = sagaMiddleware.run;

  const injectEnhancer = createInjectorsEnhancer({
    createReducer,
    runSaga,
  });

  const store = createStore(
    createReducer(),
    composeEnhancers(applyMiddleware(sagaMiddleware), injectEnhancer),
  );

  store.injectedReducers = {};

  return store;
};
