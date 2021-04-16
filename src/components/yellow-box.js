import React, { Component } from 'react';

class YellowBox extends Component {
  
  handleInput = (event) => {
    this.props.onReceiveValue(event.target.value);
  }

  render() {
    return (
      <div style={{"height" : "100%"}}> 
        <h1>Yellow Box 1</h1>
        <input type="text" placeholder="Enter any value..." onChange={this.handleInput}/>
      </div>
    );
  }
}

export default YellowBox;