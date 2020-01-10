import React from 'react';

// Components
import Navigation from './components/header/Navigation';
import AddCity from './components/AddCity';
import Registration from './components/Registration';
import Login from './components/Login';
import Passport from './components/passport/Passport';

function App() {

  return (
    <div className="App">
      <Navigation />
      <AddCity />
      <Registration />
      <Login />
      <Passport />
    </div>
  );
}

export default App;
