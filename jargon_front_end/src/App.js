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
        this.setState({username: profileData.username})
      })
    }
  }

  setUsername = (username) => {
    this.setState({ username: username })
  }

  render() {
    return (
      <Switch>
      <div className="App"> 
        <Route path="/login" render={(routerProps) => <Login {...routerProps} setUsername={this.setUsername} />} />
        <Route path="/signup" component={SignUp}/>
        <Route path="/profile" render={(routerProps) => <Profile {...routerProps} profileData={this.state} />} />
        <Route exact path="/" render={(routerProps) => <Login {...routerProps} setUsername={this.setUsername} />} /> 
      </div>
      </Switch>
    );
  }
}

export default withRouter(App);
