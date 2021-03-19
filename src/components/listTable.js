import React, { Component } from 'react';
import axios from 'axios';

class ListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeList: [],
      login : {
        email: '',
        password: ''
      }
    }
  }

  listUserProfile() {
    const url = "https://reqres.in/api/users?page=1";
    axios.get(url)
      .then((response) => {
        const { data } = response;
        console.log(data.data)
        this.setState({
          employeeList: data.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  inputChange = (event) => {
    this.setState({
      login : {...this.state.login, [event.target.name] : event.target.value}
    })
  }

  sumbitLogin(){
    console.log(this.state.login)
    
    const url = "https://reqres.in/api/login";
    axios.post(url, this.state.login)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    let listOfEmployee = this.state.employeeList.map((value, index) => {
      return (
        <tr key={index}>
          <td>{value.id}</td>
          <td>{value.first_name}</td>
          <td>{value.last_name}</td>
          <td>{value.email}</td>
          <td>
            <img src={value.avatar} style={{ width: '45px' }} />
          </td>
        </tr>
      )
    });

    return (
      <div>
        <div className="form">
          <div className="input-wrapper">
            <label className="label">Enter Email ID:</label>
            <input className="input" type="email" name="email" placeholder="Please enter email id"
              onChange={this.inputChange} />
          </div>
          <div className="input-wrapper">
            <label className="label">Enter Password:</label>
            <input className="input" type="password" name="password" placeholder="Please enter password"
              onChange={this.inputChange} />
          </div>
          <button onClick={() => this.sumbitLogin()}>LOGIN</button>
        </div>
        <button onClick={() => this.listUserProfile()}>List All User Profile</button>
        <table id="customers">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {listOfEmployee}
          </tbody>
        </table>

      </div>
    );
  }
}

export default ListTable;