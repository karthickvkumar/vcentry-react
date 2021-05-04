import React, { Component, lazy, Suspense } from 'react';
import {BrowserRouter, Route, Switch, NavLink, withRouter} from 'react-router-dom';
import InboxPage from './inbox';
import ProfilePage from './profile';
//import AboutPage from './about';
import SettingsPage from './settings';
import SingleUser from './single-user';
import SharingSiblings1 from './sharing-siblings-1';
import SharingSibling2 from './sharing-sibling-2';
import TodoList from './todoList';

const AboutPage = lazy(() => import('./about'));

class HomePage extends Component {

  onLogout(){
    localStorage.clear();
    this.props.history.push("/");
  }

  render() {
    console.log(this.props.history.location)
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
            <div className="btn-link-wrap">
              <NavLink to="/home/sibling-1" className="btn-link" activeClassName="active-btn-link"> Sibling-1</NavLink>
            </div>
            <div className="btn-link-wrap">
              <NavLink to="/home/sibling-2" className="btn-link" activeClassName="active-btn-link"> Sibling-2</NavLink>
            </div>
            
            <div className="btn-link-wrap">
              <NavLink to="/home/todo" className="btn-link" activeClassName="active-btn-link"> Todo List</NavLink>
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
                <Route path="/home/sibling-1" component={SharingSiblings1}></Route>
                <Route path="/home/sibling-2" component={SharingSibling2}></Route>
                <Route path="/home/todo" component={TodoList}></Route>
              </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(HomePage);