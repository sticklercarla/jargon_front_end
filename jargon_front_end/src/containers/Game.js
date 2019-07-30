import React from 'react';
import CorrectWordBank from '../game_components/CorrectWordBank.js'
import GameCanvas from './GameCanvas.js'
import WordBank from '../game_components/WordBank.js'

class Game extends React.Component {
    
  state = {
    wordBank: [],
    correctWords: [],
    incorrectWords: []
  }


    render() {
      console.log(this.props)
      return (
        <div className="Game">
          <CorrectWordBank />
          <GameCanvas gameDetails={this.props.gameDetails} />
          <WordBank />
        </div>
      );
    }
  }
  
  export default Game;