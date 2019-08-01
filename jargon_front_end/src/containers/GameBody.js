import React from 'react';

import GameForm from '../components/GameForm.js'
import Rules from '../components/Rules.js'
import HighScores from '../components/HighScores.js'
import Game from './Game.js'

class GameBody extends React.Component {

  state = {
    gameDetails: {},
    wordBank: [],
    selectedCategory: {}
  }

  handleGameForm = (e) => {
    this.setState({ gameDetails: e }, () => this.handleState())
  }

  handleState = () => {
    let selectedCategory = this.state.gameDetails.category
    let selectedDifficulty = this.state.gameDetails.difficulty
    let allCategories = this.props.profileData.categories
    let category = allCategories.find(category =>  category.title === selectedCategory)
    let words = category.words.map(word => word)
    this.setState({ selectedCategory: category, wordBank: words}, () => this.changePage())

    // this.props.updatePage("game")
  }

  changePage = () => {
    this.props.updatePage("game")
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
        return <Game createNewGame={this.props.createNewGame} categories={this.props.profileData.categories} wordBank={this.state.wordBank} gameDetails={this.state.gameDetails} />
      default:
        return <Rules />
    }
  }
}

export default GameBody;