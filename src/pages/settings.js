import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todo from '../redux/action/todo-action';

class SettingsPage extends Component {
  
  constructor(props){
    super(props);
    this.textarea = React.createRef();
    this.message = React.createRef();
    this.state = {
      message : ""
    }
  }

  onUpdate(){
    console.log(this.textarea.current.value)
    console.log(this.message)
    this.message.current.innerHTML = this.textarea.current.value;
  }

  handelInput = (event) => {
    this.setState({
      message : event.target.value
    })
  }
  
  addNewTodo(){
    console.log("Settings Component ---> ", this.state.message )
    this.props.action.addTodoList(this.state.message);
  }


  render() {
    const list = this.props.todoItems.todoList.map((value, index) => {
      return(
        <li key={index}>{value}</li>
      )
    })
    return (
      <div>
        <h1>Welcome to Settings Page</h1>
        <label>Enter Job Description:</label>
        <textarea placeholder="Enter JD" ref={this.textarea}></textarea>
        <br></br>
        <button onClick={() => this.onUpdate()}>Update</button>
        <h1 ref={this.message}></h1>
        <div>
          <h1>TODO List</h1>
          <label>Enter a ToDo Message : </label>
          <input type="text" onChange={this.handelInput}></input>
          <button onClick={() => this.addNewTodo()}>Add New TODO</button>
        </div>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log("mapStateToProps --> ", state)
  return {
    todoItems : state.todoReducer
  }
}

function mapDispatchToProps(dispatch){
  return {
    action : bindActionCreators(todo, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);