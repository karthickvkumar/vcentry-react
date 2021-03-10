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
    console.log(this.state);
  }

  onTypeEmail(event){
    //console.log(event.target.value);
    //this.state.email = event.target.value;
    this.setState({
      email : event.target.value
    });
  }

  onTypePassword(event){
    //console.log(event.target.value);
    this.setState({
      password : event.target.value
    });
  }
  

  render() {
    const messsage = "The user details are,"
    return (
      <div> 
        <label>Enter Email:</label>
        <input type="text" placeholder="Enter email" onChange={this.onTypeEmail.bind(this)}/>
        <br></br>
        <label>Enter Password:</label>
        <input type="password" placeholder="Enter password" onChange={this.onTypePassword.bind(this)}/>
        <br></br>
        <button onClick={() => this.onClickLogin()}>Login</button>
        <div>
          <p>{messsage}</p>
          <h2>{this.state.email}</h2>
          <h2>{this.state.password}</h2>
        </div>
      </div>
    );
  }
}

export default LoginComponent;