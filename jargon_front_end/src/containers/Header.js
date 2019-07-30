import React from 'react';

class Header extends React.Component{

  handleClick = (e) => {
    this.props.updatePage(e.target.id)
  }

  logout = (e) => {
    localStorage.clear()
    this.props.history.push('/')
  }

  render(){
    return (
      <div className="Header">
        <h1>JARGON</h1>
        <h2>Welcome {this.props.profileData.username}</h2>
        <ul className="nav">
          <li id="logout" onClick={this.logout}>Log Out</li>
          <li id="rules" onClick={this.handleClick}>Rules</li>
          <li id="play" onClick={this.handleClick}>Play</li>
          <li id="high-scores" onClick={this.handleClick}>High Scores</li>
        </ul>
        
      </div>
    );
  }
}

export default Header;
