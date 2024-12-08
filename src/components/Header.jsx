import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header({ loggedIn, username, handleLogout }) {
  return (
    <header className="header">
      <Link to="/">
        <img src="logo.png" alt="Logo" className="logo" />
      </Link>
      <div className="auth-section">
        {!loggedIn ? (
          <NavLink to="/login" className="login-button">
            Login
          </NavLink>
        ) : (
          <div className="user-controls">
            <p>Hello, {username} </p>
            <NavLink onClick={handleLogout} to="/" className="login-button">
              Logout
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
