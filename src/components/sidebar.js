import React, { Component } from 'react';

class Sidebar extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      register : {
        firstName: '',
        lastName : '',
        emailID : '',
        address : '',
        gender: '',
        city : '',
        skills : [],
        state : '',
      },
      error: {
        firstName: false,
        lastName : false,
        emailID : false,
        address: false,
        gender: false,
        skills : false,
        city : false,
        state : false,
      }
    }
  }


  inputChange = (event) => {
    const {skills } = this.state.register;
    if(event.target.name === 'skills'){
      if(event.target.checked){
        skills.push(event.target.value);
      }else{
        const index = skills.findIndex((value) => value === event.target.value);
        skills.splice(index, 1);
      }
      this.setState({
        register : {...this.state.register, skills : skills}
      })
    }
    else if(event.target.name !== 'skills'){
      this.setState({
        register : {...this.state.register, [event.target.name] : event.target.value}
      })
    }
  }
  
  onFocusInput = (event) => {
    this.setState({
      error : {...this.state.error, [event.target.name] : false}
    })
  }

  onBlurInput = (event) => {
    if(event.target.value.trim() == ''){
      this.setState({
        error : {...this.state.error, [event.target.name] : true}
      })
    }
  }

  onFormValidate(){
    let { error, register } = this.state;
    for(var key in error){
      if(key === 'skills'){
        error = {...error, [key] : register['skills'].length == 0 ? true : false  }
      }else{
        error = {...error, [key] : register[key].trim() == '' ? true : false  };
      }
    }
    this.setState({
      error : error
    })
  }
  
  onClickRegister(){
    this.onFormValidate();
    
  }

  render() {
    let { firstName, lastName, emailID, gender, skills, city, state, address} = this.state.error;

    return ( 
      <div className="form">
        <div className="input-wrapper">
          <label className="label">Enter First Name:</label>
          <input className="input" type="text" name="firstName" placeholder="Please enter first name" 
          onChange={this.inputChange} onBlur={this.onBlurInput} onFocus={this.onFocusInput}/>
          { firstName &&  <p className="error-msg">Please enter a valid first name</p>}
          
        </div>
        <div className="input-wrapper">
          <label className="label">Enter Last Name:</label>
          <input className="input" type="text" name="lastName" placeholder="Please enter last name" onChange={this.inputChange} onBlur={this.onBlurInput} onFocus={this.onFocusInput}/>
          { lastName && <p className="error-msg">Please enter a valid last name</p>}
        </div>
        <div className="input-wrapper">
          <label className="label">Enter Email ID:</label>
          <input className="input" type="text" name="emailID" placeholder="Please enter email id" onChange={this.inputChange} onBlur={this.onBlurInput} onFocus={this.onFocusInput}/>
         { emailID && <p className="error-msg">Please enter a valid email Id</p>}
        </div>
        <div className="input-wrapper">
          <label className="label">Select your Gender:</label>
          <input type="radio" name="gender" value="male" onChange={this.inputChange}/>Male
          <input type="radio" name="gender" value="female" onChange={this.inputChange}/>Female
          <input type="radio" name="gender" value="others" onChange={this.inputChange}/>Others
          { gender && <p className="error-msg">Please select any gender</p>}
        </div>
        <div className="input-wrapper">
          <label className="label">Select your Skills:</label>
          <input type="checkbox" name="skills" value="angular" onChange={this.inputChange}/>Angular
          <input type="checkbox" name="skills" value="react" onChange={this.inputChange}/>React
          <input type="checkbox" name="skills" value="php" onChange={this.inputChange}/>PHP
          <input type="checkbox" name="skills" value=".net" onChange={this.inputChange}/>.NET
          <input type="checkbox" name="skills" value="java" onChange={this.inputChange}/>JAVA
          { skills && <p className="error-msg">Please select any skills</p>}
        </div>
        <div className="input-wrapper">
          <label className="label">Enter Address:</label>
          <textarea className="input" name="address" onChange={this.inputChange} onBlur={this.onBlurInput} onFocus={this.onFocusInput}></textarea>
          { address && <p className="error-msg">Please enter a valid address</p>}
        </div>
        <div className="input-wrapper">
        <label className="label">Select your City:</label>
        <select className="input" defaultValue="" name="city" onChange={this.inputChange}>
          <option disabled value="">Please select any city</option>
          <option value="chennai">Chennai</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
        </select>
      { city &&  <p className="error-msg">Please select any city</p>}
        </div>
        <div className="input-wrapper">
        <label className="label">Select your State:</label>
        <select className="input" defaultValue="" name="state" onChange={this.inputChange}>
          <option disabled value="">Please select any city</option>
          <option value="tamil nadu">Tamil Nadu</option>
          <option value="Maharastra">Maharastra</option>
          <option value="west bengal">West Bengal</option>
          <option value="punjab">Punjab</option>
        </select>
        { state && <p className="error-msg">Please select any state</p>}

        </div>
        <button onClick={() => this.onClickRegister()}>Register</button>
      </div>
    );
  }
}

export default Sidebar;