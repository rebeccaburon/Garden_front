import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router';
import facade from '../util/apiFacade';

function Login() {
  const {handleLogin} = useOutletContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleLogin(username, password);
    } 


  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Brugernavn:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Indtast brugernavn"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Adgangskode:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Indtast adgangskode"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
