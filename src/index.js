import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './client/js/App';
import store from './store';

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
