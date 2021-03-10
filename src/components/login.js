import React, { Component } from 'react';

class LoginComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      email : '',
      password: ''
    };
  }

  onClickLogin(){
    alert('Clicked ...')
  }

  onTypeEmail(event){
    console.log(event.target.value);
  }

  onTypePassword(event){
    console.log(event.target.value);
  }
  

  render() {
    return (
      <div> 
        <label>Enter Email:</label>
        <input type="text" placeholder="Enter email" onChange={this.onTypeEmail.bind(this)}/>
        <br></br>
        <label>Enter Password:</label>
        <input type="password" placeholder="Enter password" onChange={this.onTypePassword.bind(this)}/>
        <br></br>
        <button onClick={() => this.onClickLogin()}>Login</button>
      </div>
    );
  }
}

export default LoginComponent;