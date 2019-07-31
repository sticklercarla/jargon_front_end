import React from 'react';
import Word from '../components/Word.js'


class WordBank extends React.Component {

  words = () => {
    return this.props.wordBank.map(wordObj => {
      return <Word key={wordObj.id} onWordClick={this.props.onWordClick} word={wordObj}/>
    })
  }

    render() {
      return (
        <div className="WordBank">
          {this.words()}
        </div>
      );
    }
  }
  
  export default WordBank;