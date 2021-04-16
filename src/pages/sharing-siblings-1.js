import React, { Component } from 'react';
import BlueBox1 from '../components/blue-box-1';
import BlueBox2 from '../components/blue-box-2';
import GreenBox from '../components/green-box';

import '../css/sharing-sibling-1.css';

class SharingSiblings1 extends Component {

  constructor(props){
    super(props);
    this.state = {
      message : ''
    }
  }

  receivedValue = (value) => {
    console.log(value)
    this.setState({
      message : value
    })
  }

  render() {
    return (
      <div>
          <h1>Sharing Siblings Method 1</h1>
          <div className="wrap">
            <div className="blue-box">
              <BlueBox1 onGetting={this.receivedValue}></BlueBox1>
            </div>
            <div className="blue-box">
              <BlueBox2>
                <div className="green-box"> 
                  <GreenBox value={this.state.message}></GreenBox>
                </div>

              </BlueBox2>
            </div>
          </div>
      </div>
    );
  }
}

export default SharingSiblings1;