import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import App from './index';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
