import React, { Component } from 'react';

class ListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeList: [
        {
          "id": 7,
          "email": "michael.lawson@reqres.in",
          "first_name": "Michael",
          "last_name": "Lawson",
          "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
          "id": 8,
          "email": "lindsay.ferguson@reqres.in",
          "first_name": "Lindsay",
          "last_name": "Ferguson",
          "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
          "id": 9,
          "email": "tobias.funke@reqres.in",
          "first_name": "Tobias",
          "last_name": "Funke",
          "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
          "id": 10,
          "email": "byron.fields@reqres.in",
          "first_name": "Byron",
          "last_name": "Fields",
          "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
          "id": 11,
          "email": "george.edwards@reqres.in",
          "first_name": "George",
          "last_name": "Edwards",
          "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
          "id": 12,
          "email": "rachel.howell@reqres.in",
          "first_name": "Rachel",
          "last_name": "Howell",
          "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
      ]
    }
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

    console.log(listOfEmployee)

    return (
      <div>
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