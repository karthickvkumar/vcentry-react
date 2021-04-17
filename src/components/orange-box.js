import React, { Component } from 'react';
import DataSharing from '../context/data-sharing-context';

class OrangeBox extends Component {

  handleChange = (event) => {
    this.context.handleData(event.target.value);
  }

  render() {
    console.log(this.context)
    return (
      <DataSharing.Consumer>
        {
          () => {
            return(
              <div>
                <h1>Orange Component</h1>
                <div>
                  <input type="text" placeholder="Enter a value here..." onChange={this.handleChange}/>
                </div>
              </div>
            )
          }
        }
      </DataSharing.Consumer>
    );
  }
}

OrangeBox.contextType = DataSharing;
export default OrangeBox;