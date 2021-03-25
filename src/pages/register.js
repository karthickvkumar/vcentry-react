import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class RegisterPage extends Component {
  render() {
    return (
      <div>
      <h1>Welcome to Register Page</h1>
      <NavLink to="/">Go to Login Page</NavLink>
      </div>
    );
  }
}

export default RegisterPage;