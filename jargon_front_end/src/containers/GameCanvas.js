import React from 'react';

class GameCanvas extends React.Component {

    state = {
        current_word: "",
        incorrect_word_bank: [],
        correct_word_bank: []
    }
    render() {
      return (
        <div className="GameCanvas">
          Hi from the GameCanvas
        </div>
      );
    }
  }
  
  export default GameCanvas;