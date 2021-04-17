import React, { Component } from 'react';
import DataSharing from '../context/data-sharing-context';

class BlackBox extends Component {
  render() {
    const context = this.context;
    return (
      <DataSharing.Consumer>
        {
          () => {
            return(
              <div>
                <h1>Black box Component</h1>
                <h1>{context.input}</h1>
              </div>
            )
          }
        }
      </DataSharing.Consumer>
    );
  }
}

BlackBox.contextType = DataSharing;
export default BlackBox;