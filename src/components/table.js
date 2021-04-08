import React, { Component } from 'react';

class TableComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedUser : {}
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

  render() {
    let list = this.props.data.map((value, index) => {
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
        <table id="customers">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableComponent;