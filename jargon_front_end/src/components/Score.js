import React from 'react';


const Score = (props) => {
    return (
      <div className="Score">
          <p>{props.game.user.username}: {props.game.score}</p>
      </div>
    );
}

export default Score;