import React from 'react';
import { Route } from 'react-router-dom'

// Components
import Navigation from './components/header/Navigation';
import Home from './components/Home'
import Registration from './components/Registration';
import Login from './components/Login';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Home />
      <Registration />
      <Login />
      <Home />
    </div>
  );
}

export default App;
