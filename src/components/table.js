import React, { Component } from 'react';

class TableComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedUser : {},
      username: ""
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    this.setState({
      selectedUser : nextProps.updatedUser
    })
  }

  onSelectUser(user, index){
    console.log(user, index)
    this.setState({
      selectedUser : user
    });
    this.props.selection(user, index);
  }

  handleChange = (event) => {
    this.setState({
      username : event.target.value
    })
  }

  render() {
    

    let filteredUser = this.props.data.filter((value) => {
      return value.name.includes(this.state.username)
    })

    console.log(filteredUser)

    let list = filteredUser.map((value, index) => {
      return(
        <tr key={index} style={{'cursor' : 'pointer'}} onClick={() => this.onSelectUser(value, index)}
            className={this.state.selectedUser.name == value.name ? 'active-tr' : ''}>
              <td>{value.name}</td>
              <td>{value.age}</td>
            </tr>
      )
    })

    return (
      <div>
        <h2>This is a Table Component</h2>
        <div>
          <label>Search User</label>
          <input type="text" placeholder="Enter Username.." onChange={this.handleChange}></input>
          {this.state.username}
        </div>
        <table id="customers">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {list.length !== 0 ?  list : 
              <tr colSpan="2">
                <td>No user found</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableComponent;