import React from 'react';
import { Link } from 'react-router-dom'

class SignUp extends React.Component {
    
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
  
      fetch('http://localhost:3000/signup', {
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
          localStorage.token = data.token
          console.log(localStorage.token)
          this.props.setUserState(this.state.username, data.user_id)
          this.props.history.push('/profile')
        }
      })
      }

    render() {
        return (
            <div className="signup">
              <h1>Signup For JARGON</h1>
              <form onSubmit={this.onSubmit}>
                <input 
                  type="text" 
                  name="username" 
                  value={this.state.username} 
                  placeholder="username"
                  onChange={this.handleChange}
                />
                <input 
                  type="text" 
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
              <br/>
              <Link className="login" to="/login">Already have an account? Log In!</Link>
            </div>

        );
    }
}

export default SignUp;