import React, { Component } from 'react';

class BlueBox2 extends Component {
  render() {
    return (
      <div>
        <h1>Blue Box 2</h1>
        {this.props.children}
      </div>
    );
  }
}

export default BlueBox2;