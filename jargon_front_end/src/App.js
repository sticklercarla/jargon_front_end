import React from 'react';
import './App.css';

import Login from './components/Login.js'
import SignUp from './components/SignUp.js'
import Profile from './containers/Profile.js'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


class App extends React.Component {

  state = {
    games: [],
    username: "",
  }

  componentDidMount() {
    fetch('http://localhost:3000/games')
    .then(res => res.json())
    .then((jsonGames) => this.setState({ games: jsonGames }))

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


  render() {
    return (
      <Switch>
      <div className="App"> 
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp}/>
        <Route path="/profile" render={(routerProps) => <Profile {...routerProps} profileData={this.state} />} />
        <Route exact path="/" component={Login} />
      </div>
      </Switch>
    );
  }
}

export default withRouter(App);
