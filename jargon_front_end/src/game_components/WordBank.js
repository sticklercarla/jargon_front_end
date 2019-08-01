import React from 'react';
import Word from '../components/Word.js'


class WordBank extends React.Component {

  words = () => {

    this.props.wordBank.sort(function(a, b) {
      if(a.english < b.english) { return -1; }
      if(a.english > b.english) { return 1; }
      return 0;
    })
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