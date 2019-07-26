import React from 'react';
import Login from '../components/Login.js'
import GameForm from '../components/GameForm.js'
import Rules from '../components/Rules.js'
import HighScores from '../components/HighScores.js'
import Game from './Game.js'
import { Switch, Route } from 'react-router-dom'

class GameBody extends React.Component {
  

  render() {

    return (
      <Switch>
        <div className="GameBody">
          <Route path="/login" component={Login} />
          <Route path="/gameform" component={GameForm} />
          <Route path="/rules" component={Rules} />
          <Route path="/highscores" render={(routerProps) => <HighScores {...routerProps} users={this.props.users} />} />
          <Route path="/game" component={Game}/>
          <Route exact path="/" component={Login} />
        </div>
      </Switch>
    );
  }
}

export default GameBody;