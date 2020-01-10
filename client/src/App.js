import React from 'react';

// Components
import Navigation from './components/header/Navigation';
import AddCity from './components/AddCity';
import Registration from './components/Registration';
import Login from './components/Login';
import Passport from './components/passport/Passport';
import Restaurants from './components/restaurants/Restaurants';
function App() {

  return (
    <div className="App">
      <Navigation />
      <AddCity />
      <Registration />
      <Login />
      <Passport />
      <Restaurants />
    </div>
  );
}

export default App;
