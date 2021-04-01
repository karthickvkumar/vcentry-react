import React , {lazy,Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import HeaderComponent from './components/header';
// import Sidebar from './components/sidebar';
// import LoginComponent from './components/login';
// import ListTable from './components/listTable';

import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import HomePage from './pages/home';
import PageNotFound from './pages/page-not-found';
import ProtectedRoute from './components/protected-route';

function App(){
  // const HomePage = lazy(() => import('./pages/home'));

  return(
   <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage}></Route>
        <ProtectedRoute path="/register" component={RegisterPage}></ProtectedRoute>
        <ProtectedRoute path="/home" component={HomePage}></ProtectedRoute>
        {/* <Route path="/home" render={
          () => {
            return(
              <Suspense fallback={<h2>Page is loading...</h2>}>
                <HomePage></HomePage>
              </Suspense>
            )
          }
        }></Route> */}
        <Route component={PageNotFound}></Route>
      </Switch>
   </BrowserRouter>
  )
}

ReactDOM.render(<App></App>, document.getElementById('root'));