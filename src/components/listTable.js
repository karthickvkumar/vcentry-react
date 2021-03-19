import React, { Component } from 'react';
import axios from 'axios'; 

class ListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeList: []
    }
  }

  listUserProfile(){
    const url = "https://reqres.in/api/users?page=1";
    axios.get(url)
      .then((response) => {
        const {data} = response;
        console.log(data.data)
        this.setState({
          employeeList : data.data
        })
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
            <img src={value.avatar} style={{ width : '45px' }} />
          </td>
        </tr>
      )
    });

    return (
      <div>
        <div>
          <button onClick={() => this.listUserProfile()}>List All User Profile</button>
        </div>
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