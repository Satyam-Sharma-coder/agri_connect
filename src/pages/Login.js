import React from 'react';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  return (
    <div className="login">
      <h1>Login to AgriCycle Connect</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
