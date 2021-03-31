import React, { Component, lazy, Suspense } from 'react';
import {BrowserRouter, Route, Switch, NavLink, withRouter} from 'react-router-dom';
import InboxPage from './inbox';
import ProfilePage from './profile';
//import AboutPage from './about';
import SettingsPage from './settings';
import SingleUser from './single-user';

const AboutPage = lazy(() => import('./about'));

class HomePage extends Component {

  onLogout(){
    this.props.history.push("/");
  }

  render() {
    console.log(this.props.history.location.state)
    return (
      <BrowserRouter>
        <div className="header">
          <h1 style={{display : 'inline-block'}}>Welcome to Home Page</h1>
          <button onClick={() => this.onLogout()}>Logout</button>
        </div>
        <div className="wrapper">
          <div className="sidebar">
            <div className="btn-link-wrap">
              <NavLink to="/home" className="btn-link" activeClassName="active-btn-link" exact> Inbox</NavLink>
            </div>
            <div className="btn-link-wrap">
              <NavLink to="/home/about" className="btn-link" activeClassName="active-btn-link"> About</NavLink>
            </div>
            <div className="btn-link-wrap">
              <NavLink to="/home/profile" className="btn-link" activeClassName="active-btn-link"> Profile</NavLink>
            </div>
            <div className="btn-link-wrap">
              <NavLink to="/home/settings" className="btn-link" activeClassName="active-btn-link"> Settings</NavLink>
            </div>

          </div>
          <div className="content">
              <Switch>
                <Route path="/home" exact component={InboxPage}></Route>
                {/* <Route path="/home/about" component={AboutPage}></Route> */}
                <Route path="/home/about" render={ () => { 
                  return(
                    <Suspense fallback={<h2>Page is loading...</h2>}>
                        <AboutPage></AboutPage>
                    </Suspense>
                   )
                } }></Route>
                <Route path="/home/profile" component={ProfilePage}></Route>
                <Route path="/home/settings" component={SettingsPage}></Route>
                <Route path="/home/user/:id/name/:username" component={SingleUser}></Route>
              </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(HomePage);