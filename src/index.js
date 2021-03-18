import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import HeaderComponent from './components/header';
import Sidebar from './components/sidebar';
import LoginComponent from './components/login';
import ListTable from './components/listTable';

function App(){
  return(
    <div>
      {/* <LoginComponent></LoginComponent> */}
      {/* <Sidebar></Sidebar> */}
      <ListTable></ListTable>
    </div>
  )
}

ReactDOM.render(<App></App>, document.getElementById('root'));