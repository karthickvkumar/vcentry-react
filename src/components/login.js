import React, { Component } from 'react';

class LoginComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      username : '',
      password: '',
      gender: ''
    };
  }

  onClickLogin(){
    console.log(this.state);
  }

  onHandleInput(event){
    console.log(event.target.name , '--->', event.target.value)
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  

  render() {
    const messsage = "The user details are,"
    return (
      <div> 
        <label>Enter Email:</label>
        <input type="text" placeholder="Enter email" name="username" onChange={this.onHandleInput.bind(this)}/>
        <br></br>
        <label>Enter Password:</label>
        <input type="password" placeholder="Enter password" name="password" onChange={this.onHandleInput.bind(this)}/>
        <br></br>
        <div>
          <label>Select your Gender:</label>
          <input type="radio" name="gender" value="male" onChange={this.onHandleInput.bind(this)}/>Male
          <input type="radio" name="gender" value="female" onChange={this.onHandleInput.bind(this)}/>Female
          <input type="radio" name="gender" value="na" onChange={this.onHandleInput.bind(this)} />Others
        </div>
        <button onClick={() => this.onClickLogin()}>Login</button>
        <div>
          <p>{messsage}</p>
          <h2>{this.state.username}</h2>
          <h2>{this.state.password}</h2>
        </div>
      </div>
    );
  }
}

export default LoginComponent;