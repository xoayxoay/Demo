import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import AppContainer from 'containers/App';
import ThemeProvider from 'containers/ThemeProvider';
import history from 'utils/history';

import configureStore from './config/store';

import './config/i18n';
import './styles/styles.scss';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider>
          <AppContainer />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
