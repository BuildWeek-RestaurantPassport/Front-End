import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Route } from 'react-router-dom'

// Components
import Navigation from './components/header/Navigation';
import Home from './components/Home'
import Registration from './components/Registration';
import Restaurants from './components/restaurants/Restaurants';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Home />
      <Registration />
      <Route exact path="/" component={Restaurants} />

    </div>
  );
}

export default App;
