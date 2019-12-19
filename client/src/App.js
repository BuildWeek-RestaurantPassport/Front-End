import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-logo">Restaurant Passport</h1>

        <div className="Nav-links">
          <NavLink>Restaurants</NavLink>
          <NavLink>My Passport</NavLink>
          <button>Sign Up</button>
        </div>

      </header>
    </div>
  );
}

export default App;
