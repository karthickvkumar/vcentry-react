import React, { Component } from 'react';
import YellowBox from '../components/yellow-box';

class BlueBox1 extends Component {

  received = (value) => {
    console.log(value)
    this.props.onGetting(value);
  }

  render() {
    return (
      <div>
        <h1>Blue Box 1</h1>
        <div className="yellow-box">
          <YellowBox onReceiveValue={this.received}></YellowBox>
        </div>
      </div>
    );
  }
}

export default BlueBox1;