import React from 'react';



class Word extends React.Component {

  handleClick = (e) => {
    this.props.onWordClick(e.target.innerText)
  }

  render() {
    return (
      <div onClick={this.handleClick} name={this.props.word.english} className="Word">
          <p className="english-word">{this.props.word.english} </p>
      </div>
    );
  }
}

export default Word;