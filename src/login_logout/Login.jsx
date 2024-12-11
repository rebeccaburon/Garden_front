import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate, useOutletContext } from 'react-router';
import facade from '../util/apiFacade';

function Login() {

  const PageContainer = styled.div`
    position: relative;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    text-align: center;

      @media (max-width: 600px) {
      height: auto; /* Allow the container to grow on smaller screens */
      padding: 20px;
    }
  `;

  const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure video covers the screen */
  z-index: -1; /* Place behind content */
  pointer-events: none; /* Prevent interaction with the video */
`;
  const {handleLogin} = useOutletContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleLogin(username, password);
    } 


  return (
    <PageContainer>
       <BackgroundVideo autoPlay loop muted playsInline>
          <source src="home-screen-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </BackgroundVideo>
    <div className="login-container">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">USERNAME:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="ENTER USERNAME"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">PASSWORD:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="ENTER PASSWORD"
          />
        </div>
        <button type="submit" className="login-button">LOGIN</button>
      </form>
    </div>
    </PageContainer>
  );
}

export default Login;
