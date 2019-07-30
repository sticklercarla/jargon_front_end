import React from 'react';

import GameForm from '../components/GameForm.js'
import Rules from '../components/Rules.js'
import HighScores from '../components/HighScores.js'
import Game from './Game.js'

class GameBody extends React.Component {
  
  render () {
    switch(this.props.page) {
      case 'rules':
        return <Rules />
      case 'play':
        return <GameForm />
      case 'high-scores':
        return <HighScores profileData={this.props.profileData}/>
      default:
        return <GameForm />
    }
  }
}

export default GameBody;