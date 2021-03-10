import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import HeaderComponent from './components/header';
// import Sidebar from './components/sidebar';
import LoginComponent from './components/login';

function App(){
  return(
    <div>
      <LoginComponent></LoginComponent>
    </div>
  )
}

ReactDOM.render(<App></App>, document.getElementById('root'));