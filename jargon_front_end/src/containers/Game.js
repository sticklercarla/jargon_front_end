import React from 'react';
import CorrectWordBank from '../game_components/CorrectWordBank.js'
import GameCanvas from './GameCanvas.js'
import WordBank from '../game_components/WordBank.js'

class Game extends React.Component {
    render() {
      return (
        <div className="Game">
          <CorrectWordBank />
          <GameCanvas />
          <WordBank />
        </div>
      );
    }
  }
  
  export default Game;