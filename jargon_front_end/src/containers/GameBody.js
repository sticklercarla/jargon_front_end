import React from 'react';
import Login from '../components/Login.js'
import GameForm from '../components/GameForm.js'
import Rules from '../components/Rules.js'
import HighScores from '../components/HighScores.js'
import Game from './Game.js'

class GameBody extends React.Component {
  render() {
    return (
      <div className="GameBody">
        Hi from the GameBody
        <Login />
        <GameForm />
        <Rules />
        <HighScores />
        <Game />
      </div>
    );
  }
}

export default GameBody;