import React from 'react';


const Score = (props) => {
    return (
      <div className="Score">
          <h2>{props.game.user.username}: {props.game.score}</h2>
      </div>
    );
}

export default Score;