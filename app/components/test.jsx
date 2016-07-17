import React, { Component, PropTypes } from 'react';
import connector from '../store/connector.js';

const { func } = PropTypes;

class Test extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.initialAction();
  }
  handleClick(e) {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>Testing this out</h1>
      </div>
    );
  }
}

Test.propTypes = {
  initialAction: func
};

export default connector(Test);
