import './stylesheets/main.scss';
import React, { Component } from 'react';
import Test from './components/test.jsx';
//  import * as CLDR from '../node_modules/cldr-core/availableLocales.json';

export default class App extends Component {
  render () {
    return (
      <div>
        <Test />
      </div>
    );
  }
}
