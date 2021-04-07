import React, { Component } from 'react';

class LifeCycle extends Component {

  constructor(props){
    super(props);
    console.log('This is a constructor Mehthod')
    this.state = {
      name : 'Mr.John'
    };
  }
  
  componentWillMount(){
    console.log('This is a Component Will Mount Method')
  }
  
  componentDidMount(){
    console.log('This is a Component Did Mount Method')
  }
  
  changeName(){
    this.setState({
      name : "Mr.TOM"
    })
  }
  
  shouldComponentUpdate(nextProps, nextState){
    console.log('This is a Should Component Update Method')
    console.log(nextProps, nextState);
    if(nextState.name == this.state.name){
      return false;
    }
    else{
      return true;
    }
  }
  
  componentWillUpdate(){
    console.log('This is a Component Will Update Method')
    
  }
  
  componentDidUpdate(){
    console.log('This is a Component Did Update Method')
  }

  render() {
    console.log('This is a Render Mehthod')
    return (
      <div>
        <h1>React Life Cycle</h1>
        <h2>Username : {this.state.name}</h2>
        <button onClick={() => this.changeName()}>Click me</button>
      </div>
    );
  }
  
}

export default LifeCycle;