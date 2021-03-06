import React, { Component } from 'react';
import ApiService from '../services/api';
import {NavLink} from 'react-router-dom'

class ProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      userList : [],
      isLoading : true
    }
  }

  componentDidMount(){
    this.listUser(0);
  }
  
  async listUser(pageNo){
    this.setState({
      isLoading : true
    })
    const url = "users?page=" + pageNo;
    const response = await ApiService.getAPI(url);
    if(response && response.hasOwnProperty('data')){
      this.setState({
        userList : response.data.data
      })
    }
    this.setState({
      isLoading : false
    })
  }

  onDeleteUser(user){
    const index = this.state.userList.findIndex(value => value.id === user.id)
    console.log(user.id, index)
    this.state.userList.splice(index, 1);
    this.setState({
      userList : this.state.userList
    })
  }

  render() {
    let users = this.state.userList.map((value, index) => {
      return(
        <tr key={index}>
          <td>{value.id}</td>
          <td>{value.first_name}</td>
          <td>{value.last_name}</td>
          <td>{value.email}</td>
          <td>
            <img src={value.avatar} style={{width: '45px'}} />
          </td>
          <td>
            <NavLink to={"/home/user/" + value.id + "/name/" + value.first_name} >Details</NavLink>
            <a onClick={() => this.onDeleteUser(value)}>Delete</a>
          </td>
        </tr>
      )
    })
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
                <th>Action</th>
              </tr>
            </thead>
            {!this.state.isLoading && <tbody>
              {users}
              {this.state.userList.length == 0 && <tr>
                <td colSpan="5">
                  <h3>No User Found in this Record</h3>
                </td>
              </tr>}
            </tbody>}
        </table>
        { this.state.isLoading && <div className="center-img">
          <img src={require('../images/loader.gif').default} style={{width: '150px'}}/> 
        </div>}
        <div>
          <button onClick={() => this.listUser(0)}>1</button>
          <button onClick={() => this.listUser(1)}>2</button>
          <button onClick={() => this.listUser(2)}>3</button>
          <button onClick={() => this.listUser(3)}>4</button>
        </div>
      </div>
    );
  }
}

export default ProfilePage;