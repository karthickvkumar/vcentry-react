import React, { Component } from 'react';
import TableComponent from '../components/table';

class InboxPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      list : [
        {name : 'ads', age : 25},
        {name : 'ads', age : 25},
        {name : 'ads', age : 25},
        {name : 'ads', age : 25},
        {name : 'ads', age : 25},
      ]
    }
  }
  render() {
    return (
      <div> 
        <h1>Welcome to Inbox Page</h1>
        <TableComponent data={this.state.list} name="sdfsfsdfsfsd" age="34"></TableComponent>
      </div>
    );
  }
}

export default InboxPage;