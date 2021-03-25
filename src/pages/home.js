import React, { Component } from 'react';

class HomePage extends Component {

  onLogout(){
    this.props.history.push("/");
  }


  render() {
    return (
      <div>
      <h1>Welcome to Home Page</h1>
      <button onClick={() => this.onLogout()}>Logout</button>
      </div>
    );
  }
}

export default HomePage;