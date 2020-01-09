import React from 'react';
import { Route } from 'react-router-dom'

// Components
import Navigation from './components/header/Navigation';
import Registration from './components/Registration';
import Login from './components/Login';
import Search from './components/Search';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Home />
      <Registration />
      <Login />
      <Search />
    </div>
  );
}

export default App;
