import React, { Component } from 'react';

class SettingsPage extends Component {
  
  constructor(props){
    super(props);
    this.textarea = React.createRef();
    this.message = React.createRef();
  }

  onUpdate(){
    console.log(this.textarea.current.value)
    console.log(this.message)
    this.message.current.innerHTML = this.textarea.current.value;
  }
  
  render() {
    return (
      <div>
        <h1>Welcome to Settings Page</h1>
        <label>Enter Job Description:</label>
        <textarea placeholder="Enter JD" ref={this.textarea}></textarea>
        <br></br>
        <button onClick={() => this.onUpdate()}>Update</button>
        <h1 ref={this.message}></h1>
      </div>
    );
  }
}

export default SettingsPage;