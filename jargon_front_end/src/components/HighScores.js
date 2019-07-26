import React from 'react';

const HighScores = (props) => {
    return (
      <div className="HighScores">
          HI FROM HIGH SCORES!
          {props.users.map(user => user.username)}
      </div>
    );
}

export default HighScores;

