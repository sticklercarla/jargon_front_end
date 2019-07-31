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


    onWordClick = (e) => {
      this.setState({
        selectedWord: e
      }, () => console.log(this.state.selectedWord))
      
    }
  
    compareWords = (droppingWord) => {
      // debugger
      let foreignWord = droppingWord[0].join("")
      let niceWord = this.props.wordBank.find(word => word.spanish === foreignWord)

      if(niceWord.english === this.state.selectedWord){
        this.setState({
          correctWords: [...this.state.correctWords, niceWord]
        }, () => console.log(this.state.correctWords))
        return true
      } 
      this.setState({
        incorrectWords: [...this.state.incorrectWords, niceWord]
      }, () => console.log(this.state.incorrectWords))
      return false
    }

    render() {
      return (
        <div className="Game">
          <CorrectWordBank correctWords={this.state.correctWords} />
          <GameCanvas wordBank={this.props.wordBank} gameDetails={this.props.gameDetails} compareWords={this.compareWords} />
          <WordBank wordBank={this.props.wordBank} onWordClick={this.onWordClick} />
        </div>
      );
    }
  }
  
  export default Game;