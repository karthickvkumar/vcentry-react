import React, { Component } from 'react';

class TableComponent extends Component {
  render() {
    console.log(this.props)
    let list = this.props.data.map((value, index) => {
      return(
        <tr key={index}>
              <td>{value.name}</td>
              <td>{value.age}</td>
            </tr>
      )
    })

    return (
      <div>
        <h2>This is a Table Component</h2>
        <table>
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