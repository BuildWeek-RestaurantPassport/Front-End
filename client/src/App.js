import React from 'react';

// Components
import Navigation from './components/header/Navigation';
import AddCity from './components/AddCity';
import Registration from './components/Registration';
import Login from './components/Login';
import Passport from './components/passport/Passport';
import Restaurants from './components/restaurants/Restaurants';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/Registration" component={Registration} />
        <Route path="/Login" component={Login} />
        <PrivateRoute path="/AddCity" component={AddCity} />
        <PrivateRoute path="/Passport" component={Passport} />
      </Switch>
    </div>
  );
}

export default App;
