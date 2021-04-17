import React, { Component } from 'react';
import OrangeBox from './orange-box';

class RedBox1 extends Component {
  render() {
    return (
      <div>
        <h1>Red Box 1 Component</h1>
        <div className="green-box"> 
          <OrangeBox></OrangeBox>
        </div>
      </div>
    );
  }
}

export default RedBox1;