import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import ApiService from '../services/api';

class LoginPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      email : '',
      password: ''
    }
  }

  componentWillMount(){
    let isAuthenticated = localStorage.getItem('access-token') ? true : false;
    if(isAuthenticated){
      this.props.history.push('/home', this.state)
    }
  }

  async onLogin(){
    
    const url = "login";
    const response = await ApiService.postAPI(url, this.state);

    if(response.status == 200){
      let token = response.data.token;
      localStorage.setItem('access-token', token);
      this.props.history.push('/home', this.state);
    }
    else{
      alert('Invalid User')
    }
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome to Login Page</h1>
        <div>
          <label>Enter Email ID:</label>
          <input type="email" placeholder="Enter your email id" name="email" onChange={this.handleInput}/>
        </div>
        <div>
          <label>Enter Password:</label>
          <input type="password" placeholder="Enter your password" name="password" onChange={this.handleInput}/>
        </div>
          <button onClick={() => this.onLogin()}>Login by Code</button>
        <br></br>
        <NavLink to="/register">Click here to Register</NavLink>
      </div>
    );
  }
}

export default LoginPage;