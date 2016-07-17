import './stylesheets/main.scss';
import React, { Component } from 'react';
import * as CLDR from '../node_modules/cldr-core/availableLocales.json';

console.log(CLDR);

export default class App extends Component {
  render () {
    return (
      <div><h1>Hello</h1></div>
    );
  }
}
