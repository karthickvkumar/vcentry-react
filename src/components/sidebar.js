import React, { Component } from 'react';

class Sidebar extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      firstNameError: false,
      lastName : '',
      lastNameError : false,
      emailID : '',
      emailIDError : false,
      address : '',
      addressError: false,
      gender: '',
      genderError: false,
      skills : [],
      skillsError : false,
      city : '',
      cityError : false,
      state : '',
      stateError : false,
    }
  }


  inputChange = (event) => {
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

  // onBlurInput = (event) => {
  //   console.log(event)
  // }

  // onFocusInput = (event) => {
  //   console.log(event)
  // }

  onClickRegister(){
    console.log(this.state);
    if(this.state.firstName == ''){
      this.setState({
        firstNameError : true
      })
    }
    else{
      this.setState({
        firstNameError : false
      })
    }

    this.state.lastName == '' ? this.setState({ lastNameError : true}) : this.setState({ lastNameError : false})
  }

  render() {
    let { firstNameError, lastNameError, emailIDError, genderError, skillsError, cityError, stateError, addressError} = this.state;

    return ( 
      <div className="form">
        <div className="input-wrapper">
          <label className="label">Enter First Name:</label>
          <input className="input" type="text" name="firstName" placeholder="Please enter first name" onChange={this.inputChange} onBlur={this.onBlurInput} onFocus={this.onFocusInput}/>
          { firstNameError &&  <p className="error-msg">Please enter a valid first name</p>}
          
        </div>
        <div className="input-wrapper">
          <label className="label">Enter Last Name:</label>
          <input className="input" type="text" name="lastName" placeholder="Please enter last name" onChange={this.inputChange} onBlur={this.onBlurInput} onFocus={this.onFocusInput}/>
          { lastNameError && <p className="error-msg">Please enter a valid last name</p>}
        </div>
        <div className="input-wrapper">
          <label className="label">Enter Email ID:</label>
          <input className="input" type="text" name="emailID" placeholder="Please enter email id" onChange={this.inputChange} onBlur={this.onBlurInput} onFocus={this.onFocusInput}/>
         { emailIDError && <p className="error-msg">Please enter a valid email Id</p>}
        </div>
        <div className="input-wrapper">
          <label className="label">Select your Gender:</label>
          <input type="radio" name="gender" value="male" onChange={this.inputChange}/>Male
          <input type="radio" name="gender" value="female" onChange={this.inputChange}/>Female
          <input type="radio" name="gender" value="others" onChange={this.inputChange}/>Others
          { genderError && <p className="error-msg">Please select any gender</p>}
        </div>
        <div className="input-wrapper">
          <label className="label">Select your Skills:</label>
          <input type="checkbox" name="skills" value="angular" onChange={this.inputChange}/>Angular
          <input type="checkbox" name="skills" value="react" onChange={this.inputChange}/>React
          <input type="checkbox" name="skills" value="php" onChange={this.inputChange}/>PHP
          <input type="checkbox" name="skills" value=".net" onChange={this.inputChange}/>.NET
          <input type="checkbox" name="skills" value="java" onChange={this.inputChange}/>JAVA
          { skillsError && <p className="error-msg">Please select any skills</p>}
        </div>
        <div className="input-wrapper">
          <label className="label">Enter Address:</label>
          <textarea className="input" name="address" onChange={this.inputChange} onBlur={this.onBlurInput} onFocus={this.onFocusInput}></textarea>
          { addressError && <p className="error-msg">Please enter a valid address</p>}
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
      { cityError &&  <p className="error-msg">Please select any city</p>}
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
        { stateError && <p className="error-msg">Please select any state</p>}

        </div>
        <button onClick={() => this.onClickRegister()}>Register</button>
      </div>
    );
  }
}

export default Sidebar;