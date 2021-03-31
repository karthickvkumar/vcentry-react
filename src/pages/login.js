import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class LoginPage extends Component {

  onLogin(){
    //code
    var response = {
      isAuthenticated : true,
      token : 'sdfwerwerfefvrefedfsdfsdfsdfsdfsfsdfssdfsff',
      customerID : 'AQFD897'
    }

    this.props.history.push('/home', response);
  }

  render() {
    return (
      <div>
        <h1>Welcome to Login Page</h1>
        <button onClick={() => this.onLogin()}>Login by Code</button>
        <br></br>
        <NavLink to="/register">Click here to Register</NavLink>
      </div>
    );
  }
}

export default LoginPage;