import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import {Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import SignUp from './components/SignUp';
import Registration from './components/Registration';


function App() {
  
  return (
    <Home/>,
    <Registration/>
    
    );
 
}

export default App;
