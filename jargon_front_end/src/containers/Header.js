import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <div className="Header">
          <h1>JARGON</h1>
          <div className="nav">
          <Link to="/rules">Rules</Link>
          <Link to="/login">Login</Link>
          <Link to="/gameform">Play</Link>
          <Link to="/game">Game</Link>
          <Link to="/highscores">High Scores</Link>
          </div>
      </div>
    );
}

export default Header;
