import React, { Component } from 'react';

import {connect} from 'react-redux'

class TodoList extends Component {
  render() {
    const list = this.props.todoItems.todoList.map((value, index) => {
      return(
        <li key={index}>{value}</li>
      )
    })
    return (
      <div>
        <h1>This is a TodoList Component</h1>
        <ol>
          {list}
        </ol>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    todoItems : state.todoReducer
  }
}

function mapDispatchToProps(dispatch){
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);