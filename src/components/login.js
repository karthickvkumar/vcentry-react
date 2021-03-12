import React, { Component } from 'react';

class LoginComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      username : '',
      password: '',
      gender: '',
      dob: '',
      skills: [],
      city: ''
    };
  }

  onClickLogin(){
    console.log(this.state);
  }

  onHandleInput(event){
    console.log(event.target.name , '--->', event.target.value)
    console.log(event.target.checked)
    if(event.target.name === 'skills'){
      if(event.target.checked){
        this.state.skills.push(event.target.value);
      }else{
        const index = this.state.skills.findIndex((value) => value === event.target.value);
        this.state.skills.splice(index, 1);
      }
      this.setState({
        skills : this.state.skills
      })
    }
    else if(event.target.name !== 'skills'){
      this.setState({
        [event.target.name] : event.target.value
      })
    }
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
        <label>Enter DOB:</label>
        <input type="date" placeholder="Enter date of birth" name="dob" onChange={this.onHandleInput.bind(this)}/>
        <br></br>
        <div>
          <label>Select your Gender:</label>
          <input type="radio" name="gender" value="male" onChange={this.onHandleInput.bind(this)}/>Male
          <input type="radio" name="gender" value="female" onChange={this.onHandleInput.bind(this)}/>Female
          <input type="radio" name="gender" value="na" onChange={this.onHandleInput.bind(this)} />Others
        </div>
        <div>
          <label>Select your Skills:</label>
          <input type="checkbox" name="skills" value="java" onChange={this.onHandleInput.bind(this)}/>JAVA
          <input type="checkbox" name="skills" value="php" onChange={this.onHandleInput.bind(this)}/>PHP
          <input type="checkbox" name="skills" value="python" onChange={this.onHandleInput.bind(this)}/>Python
          <input type="checkbox" name="skills" value=".net" onChange={this.onHandleInput.bind(this)}/>.NET
          <input type="checkbox" name="skills" value="react-js" onChange={this.onHandleInput.bind(this)}/>React JS
        </div>

        <div>
          <label>Select your City:</label>
          <select defaultValue="default" name="city" onChange={this.onHandleInput.bind(this)}>
            <option disabled value="default">Please select any city</option>
            <option value="CH">Chennai</option>
            <option value="MDU">Madurai</option>
            <option value="ERD">Erode</option>
            <option value="TRY">Trichy</option>
          </select>
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