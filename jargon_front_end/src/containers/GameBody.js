import React from 'react';

import GameForm from '../components/GameForm.js'
import Rules from '../components/Rules.js'
import HighScores from '../components/HighScores.js'
import Game from './Game.js'

class GameBody extends React.Component {

  state = {
    gameDetails: {}
  }

  handleGameForm = (e) => {
    this.setState({ gameDetails: e }, ()=> console.log(this.state))
  }

  render () {
    switch(this.props.page) {
      case 'rules':
        return <Rules />
      case 'play':
        return <GameForm handleGameForm={this.handleGameForm} updatePage={this.props.updatePage} />
      case 'high-scores':
        return <HighScores profileData={this.props.profileData}/>
      case 'game':
        return <Game gameDetails={this.state.gameDetails} />
      default:
        return <Rules />
    }
  }
}

export default GameBody;