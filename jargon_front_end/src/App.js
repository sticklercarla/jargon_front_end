import React from 'react';
import './App.css';

import Login from './components/Login.js'
import SignUp from './components/SignUp.js'
import Profile from './containers/Profile.js'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


class App extends React.Component {

  state = {
    categories: [],
    games: [],
    username: "",
    id: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/games')
    .then(res => res.json())
    .then((jsonGames) => this.setState({ games: jsonGames }))

    fetch('http://localhost:3000/categories')
    .then(res => res.json())
    .then(categoryData => this.setState({ categories: categoryData }))

    if (localStorage.token) {
      fetch('http://localhost:3000/profile', {
        headers: {
          Authorization: localStorage.token
        }
      })
      .then(res => res.json())
      .then(profileData => {
        this.setState({username: profileData.username, id: profileData.id})
      })
    }
  }

  createNewGame = (gameData) => {

    fetch('http://localhost:3000/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.state.id,
        score: gameData.score,
        duration: gameData.duration,
        correct_word_count: gameData.correct_word_count
      })
    })
    .then(res => res.json())
    .then(data => this.setState({ games: [...this.state.games, data]})
    )

  }

  setUserState = (username, user_id) => {
    this.setState({ username: username, id: user_id }, ()=> console.log(this.state))
  }

  render() {
    return (
      <Switch>
      <div className="App"> 
        <Route path="/login" render={(routerProps) => <Login {...routerProps} setUserState={this.setUserState} />} />
        <Route path="/signup" render={(routerProps) => <SignUp {...routerProps} setUserState={this.setUserState} />} />
        <Route path="/profile" render={(routerProps) => <Profile {...routerProps} createNewGame={this.createNewGame} profileData={this.state} />} />
        <Route exact path="/" render={(routerProps) => <Login {...routerProps} setUserState={this.setUserState} />} /> 
      </div>
      </Switch>
    );
  }
}

export default withRouter(App);
