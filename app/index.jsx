import './stylesheets/main.scss';
import React, { Component } from 'react';
import Test from './components/test.jsx';
import connector from './store/connector';
import DashBoard from './views/dashBoard';
//  import * as CLDR from '../node_modules/cldr-core/availableLocales.json';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <DashBoard {...this.props} />
      </div>
    );
  }
}

export default connector(App);
