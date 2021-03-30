import React, { Component } from 'react';
import ApiService from '../services/api';

class SingleUser extends Component {

  constructor(props){
    super(props);
    this.state = {
      userDetail : {},
      isLoading : true
    }
  }

  async componentDidMount(){
    const { id } = this.props.match.params;
    console.log(id)
    const url = "users/" + id;
    this.setState({
      isLoading : true
    })
    const response = await ApiService.getAPI(url);
    console.log(response)
    if(response && response.status === 200){
      this.setState({
        userDetail : response.data.data 
      })

      this.setState({
        isLoading : false
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Single User Page</h1>
        { !this.state.isLoading && <div>
          <div>
            <span>First Name</span>
            <span>{this.state.userDetail.first_name}</span>
          </div>
          <div>
            <span>Last Name</span>
            <span>{this.state.userDetail.last_name}</span>
          </div>
          <div>
            <span>Email ID</span>
            <span>{this.state.userDetail.email}</span>
          </div>
          <div>
            <span>User Profile Image</span>
            <img src={this.state.userDetail.avatar}/>
          </div>
        </div>}
        { this.state.isLoading && <div className="center-img">
          <img src={require('../images/loader.gif').default} style={{width: '150px'}}/> 
        </div>}
      </div>
    );
  }
}

export default SingleUser;