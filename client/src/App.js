import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import axiosWithAuth from './utils/axiosWithAuth';

// Components
import PassportContext from './contexts/passportContext';
import Navigation from './components/header/Navigation';
import AddCity from './components/AddCity';
import Registration from './components/Registration';
import Login from './components/Login';
import Passport from './components/passport/Passport';
import Restaurants from './components/restaurants/Restaurants';
import AddRestaurant from './components/restaurants/addRestaurant';
import PrivateRoute from './utils/PrivateRoute';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const [cityData, setCityData] = useState([]);

  const getCities = () => {
    axiosWithAuth()
      .get("/cities")
      .then(res => setCityData(res.data))
      .catch(err => console.log(err.message));
  }

  return (
    <PassportContext.Provider value={{ cityData, setCityData, getCities }}>
      <div className="App">
        <Navigation />
        {localStorage.getItem('token') && !location.pathname.includes('add-restaurant') && <AddCity />}
        <Switch>
          <Route path="/registration" component={Registration} />
          <Route path="/" component={Login} />
          <PrivateRoute path="/passport" component={Passport} />
          <PrivateRoute path="/cities/:id/add-restaurant" component={AddRestaurant} />
          <PrivateRoute exact path="/cities/:id" component={Restaurants} />
        </Switch>
      </div>
    </PassportContext.Provider>
  );
}

export default App;
