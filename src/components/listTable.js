import React, { Component } from 'react';
import ApiService from '../services/api';

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

  async listUserProfile() {
    const url = "users?page=1";

    const response = await ApiService.getAPI(url);
    
    if(response && response.status && response.status.toString()[0] == '2'){
      const { data } = response;
      this.setState({
        employeeList: data.data
      })
    }else{
      console.log(response)
    }

    // ApiService.getAPI(url)
    //   .then((response) => {
    //     console.log(response)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })


    // axios.get(url)
    //   .then((response) => {
    //     const { data } = response;
    //     console.log(data.data)
    //     this.setState({
    //       employeeList: data.data
    //     })
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }

  inputChange = (event) => {
    this.setState({
      login : {...this.state.login, [event.target.name] : event.target.value}
    })
  }

  async sumbitLogin(){
    console.log(this.state.login)
    
    const url = "login";

    const response = await ApiService.postAPI(url, this.state.login);
    
    const {data } = response;
    
    console.log(data.token)

    localStorage.setItem('token', data.token);


    sessionStorage.setItem('token', data.token)


    // const url = "https://reqres.in/api/login";
    // axios.post(url, this.state.login)
    //   .then((response) => {
    //     console.log(response)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }

  logout(){
    localStorage.clear();
    sessionStorage.clear();
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
          <button onClick={() => this.logout()}>Clear localStorage</button>
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