import React from 'react';
import { Link } from 'react-router-dom'

class Login extends React.Component {
    
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(
      data => {
      if (data.token)  {
        // console.log(data)
        localStorage.token = data.token
        this.props.setUserState(this.state.username, data.user_id)
        this.props.history.push('/profile')
      }
    })
    }

  render() {
    return (
        <div className="login">
          <h1>Login To JARGON</h1>
          <form onSubmit={this.onSubmit}>
            <input 
              type="text" 
              name="username" 
              value={this.state.username} 
              placeholder="username"
              onChange={this.handleChange}
            />
            <input 
              type="password" 
              name="password" 
              value={this.state.password} 
              placeholder="password"
              onChange={this.handleChange}
            />
            <input 
              type="submit" 
              value="Submit" 
            />
          </form>
          <br />
          <Link className="signup" to="/signup">Create an Account</Link>
        </div>

    );
  }
}

export default Login;