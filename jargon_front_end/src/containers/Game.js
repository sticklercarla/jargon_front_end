import React from 'react';
import CorrectWordBank from '../game_components/CorrectWordBank.js'
import GameCanvas from './GameCanvas.js'
import WordBank from '../game_components/WordBank.js'

class Game extends React.Component {
    
  state = {
    selectedWord: "",
    droppingWord: "",
    correctWords: [],
    incorrectWords: []
  }

    render() {
      console.log(this.props)
      return (
        <div className="Game">
          <CorrectWordBank />
          <GameCanvas wordBank={this.props.wordBank} gameDetails={this.props.gameDetails} />
          <WordBank wordBank={this.props.wordBank} />
        </div>
      );
    }
  }
  
  export default Game;