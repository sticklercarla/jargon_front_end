import React from 'react';
import Score from './Score.js';

const HighScores = (props) => {
  const scores = props.profileData.games.map( gameObj => <Score key={gameObj.id} game={gameObj} />)
    return (
      <div className="HighScores">
          {scores}
      </div>
    );
}

export default HighScores;

