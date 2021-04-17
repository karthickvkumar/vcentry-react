import React, { Component } from 'react';
import RedBox1 from '../components/red-box-1';
import RedBox2 from '../components/red-box-2';
import DataSharing from '../context/data-sharing-context';

class SharingSibling2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue : ''
    }
  }

  onReceived = (value) => {
    console.log(value)
    this.setState({
      inputValue : value
    })
  }

  render() {
    return (
      <DataSharing.Provider 
        value={{
          handleData : this.onReceived,
          message: "Hello this is a Sharing Sibling Component 2",
          input : this.state.inputValue
        }}
      >
      <div>
        <h1>Sharing Siblings Method 2</h1>
        <div className="wrap">
            <div className="blue-box">
              <RedBox1></RedBox1>
            </div>
            <div className="blue-box">
              <RedBox2></RedBox2>
            </div>
          </div>
      </div>
      </DataSharing.Provider>
    );
  }
}

export default SharingSibling2;