import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderStyles = styled.header `
background-color: #A4D69E; 
    color: #fff;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`






function Header({ loggedIn, username, handleLogout }) {
  return (
    <HeaderStyles >
      <Link to="/">
        <img src="logo.png" alt="Logo" className="logo" />
      </Link>
      <div >
        {!loggedIn ? (
          <NavLink to="/login" className="login-button">
            LOGIN
          </NavLink>
        ) : (
          <div>
            <p>Hello, {username} </p>
            <NavLink onClick={handleLogout} to="/" className="login-button">
              LOGOUT
            </NavLink>
          </div>
        )}
      </div>
    </HeaderStyles>
  );
}

export default Header;
