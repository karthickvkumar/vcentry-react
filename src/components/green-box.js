import React, { Component } from 'react';

class GreenBox extends Component {
  render() {
    return (
      <div style={{"height" : "100%"}}>
        <h1>Green Box</h1>
        <h2>{this.props.value}</h2>
      </div>
    );
  }
}

export default GreenBox;