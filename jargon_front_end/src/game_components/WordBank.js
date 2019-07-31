import React from 'react';
import Word from '../components/Word.js'


class WordBank extends React.Component {

  words = () => {
    return this.props.wordBank.map(wordObj => {
      return <Word key={wordObj.id} word={wordObj}/>
    })
  }

    render() {
      console.log(this.props.wordBank)
      return (
        <div className="WordBank">
          Hi from the WordBank
          {this.words()}
        </div>
      );
    }
  }
  
  export default WordBank;