import React, { Component } from 'react';
import BlackBox from './black-box';

class RedBox2 extends Component {
  render() {
    return (
      <div>
        <h1>Red Box 2 Component</h1>
        <div className="green-box"> 
          <BlackBox></BlackBox>
        </div>
      </div>
    );
  }
}

export default RedBox2;