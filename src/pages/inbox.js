import React, { Component } from 'react';
import TableComponent from '../components/table';

class InboxPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      list : [
        {name : 'karthick', age : 28},
        {name : 'kumar', age : 27},
        {name : 'yuvi', age : 29},
        {name : 'aswin', age : 25},
        {name : 'prasad', age : 26},
      ],
      name: "Karthick", 
      user : {
        name : '',
        age: ''
      }

    }
  }

  changeInput = (event) => {
    this.setState({
      name : event.target.value
    })
  }

  componentWillUnmount(){
    // alert('Do you want to Leave this Page?')
  }

  // onReceiveValue(value){
  //   console.log(value)
  // }
  
  onReceive = (value) => {
    console.log(value)

    this.setState({
      user : {...this.state.user, ...value}
    })
  }

  handleInput = (event) => {
    this.setState({
      user : {...this.state.user, [event.target.name] : event.target.value}
    })
  }

  onUpdate(){
    console.log(this.state.user)
  }

  render() {
    const {name, age} = this.state.user;
    return (
      <div> 
        <h1>Welcome to Inbox Page</h1>
        {/* <input type="text" onChange={this.changeInput}></input> */}
        <div>
          <label>Update Name: </label>
          <input type="text" value={name} onChange={this.handleInput} name="name"/>
          <label>Update Age: </label>
          <input type="number" value={age} onChange={this.handleInput} name="age"/>
          <div>
            <button onClick={() => this.onUpdate()}>Update User</button>
          </div>
        </div>
        <TableComponent data={this.state.list} selection={this.onReceive} ></TableComponent>
      </div>
    );
  }
}

export default InboxPage;