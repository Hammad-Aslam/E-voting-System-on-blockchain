import React, { useState } from 'react';
import "./index.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form fields
    if (!username || !password) {
      setError('Please enter a username and password');
      return;
    }

    // Make a call to the server to authenticate the user
    authenticate(username, password)
      .then((response) => {
        if (response.status === 200) {
          // Redirect to the dashboard page
          window.location.replace('/dashboard');
        } else {
          setError('Invalid username or password');
        }
      })
      .catch((error) => {
        setError('An error occurred while logging in');
      });
  };

  return (
    <>
    <h1 className='heading-welcome'>
      Welcome to Votify
    </h1>
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
    </>
  );
};

export default Login;
