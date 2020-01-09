import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Navigation from './components/header/Navigation';
import Restaurants from './components/restaurants/RestaurantList';

function App() {

  return (
    <div className="App">

      <Navigation />
      <Route exact path="/" component={Restaurants} />

    </div>
  );
}

export default App;
