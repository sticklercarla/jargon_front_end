import React from 'react';
import './App.css';
import Header from './containers/Header.js'
import GameBody from './containers/GameBody.js'

class App extends React.Component {
  render() {
    return (
      <div className="App"> 
        <Header />
        <GameBody />
      </div>
    );
  }
}

export default App;
