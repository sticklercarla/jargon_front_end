import React from 'react';


class CorrectWordBank extends React.Component {
  
  makeWordDivs = () => {
    return this.props.correctWords.map(word => <div>{word.spanish}</div>)
  }
  
  render() {
      return (
        <div className="CorrectWordBank">
          <h4> Correct Words </h4>
          {this.makeWordDivs()}
        </div>
      );
    }
  }
  
  export default CorrectWordBank;