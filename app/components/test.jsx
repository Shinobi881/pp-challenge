import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <h1>Testing this out</h1>
      </div>
    );
  }
}

export default Test;
