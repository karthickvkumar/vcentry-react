import React, { Component } from 'react';

class HeaderComponent extends Component {
  render() {
    console.log(require('../images/shinchu.jpg'))
    console.log(require('../images/shinchu.jpg').default)
    return (
      <div>
        <h1>This is a Header Component</h1>
        <img src={require('../images/shinchu.jpg').default} className="dp-image" alt="" />
      </div>
    );
  }
}

export default HeaderComponent;