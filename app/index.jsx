import './stylesheets/main.scss';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
//  import * as CLDR from '../node_modules/cldr-core/availableLocales.json';
import store from './store/store.js';
import Test from './components/test.jsx';

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Test />
      </Provider>
    );
  }
}
