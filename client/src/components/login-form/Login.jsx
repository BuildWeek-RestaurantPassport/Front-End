import React, { useState } from 'react';

const Login = props => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    setUserCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // post request to retrieve a token from the backend
  };

  return (
    <div className="login">
      <div>
        <h2>Login</h2>
        <p>
          or&nbsp;
          <a href="/register">create an account</a>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            type="text"
            name="username"
            onChange={handleChange}
            value={userCredentials.username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={handleChange}
            value={userCredentials.password}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;