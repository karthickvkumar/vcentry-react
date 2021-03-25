import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class PageNotFound extends Component {
  render() {
    return (
      <div>
        <h1>The page you're searching is Unavailable</h1>
        <NavLink to="/home">Go to Home Page</NavLink>
      </div>
    );
  }
}

export default PageNotFound;