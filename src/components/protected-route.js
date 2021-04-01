import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class ProtectedRoute extends Component {
  render() {
    let Component = this.props.component;
    let isAuthenticated = localStorage.getItem('access-token') ? true : false;
    //debugger;
    return (
      isAuthenticated ? <Component></Component> : <Redirect to="/"></Redirect>
    );
  }
}

export default ProtectedRoute;