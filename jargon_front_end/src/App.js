import React from 'react';
import './App.css';
import Header from './containers/Header.js'
import GameBody from './containers/GameBody.js'


class App extends React.Component {

  state = {
    users: [],
    currentUser: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then((jsonUsers) => this.setState({ users: jsonUsers }))
  }

  setCurrentUser = (userObj) => {
    console.log(userObj)
  }

  render() {
    return (
      <div className="App"> 
        <Header />
        <GameBody setCurrentUser={this.setCurrentUser} users={this.state.users}/>
      </div>
    );
  }
}

export default App;
