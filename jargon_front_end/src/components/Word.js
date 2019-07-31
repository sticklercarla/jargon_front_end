import React from 'react';


const Word = (props) => {
    return (
      <div className="Word">
          <p>{props.word.english}</p>
      </div>
    );
}

export default Word;