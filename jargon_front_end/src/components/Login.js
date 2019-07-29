import React from 'react';

class Login extends React.Component {
    
    state = {
        loginUsername: "",
        loginPassword: "",
        signUpUsername: "",
        signUpPassword: ""
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    onSubmitLogin = (event) => {
      event.preventDefault()
      this.props.setCurrentUser(this.state)
    }

    onSubmitSignUp = (event) => {
      event.preventDefault()
      this.props.setCurrentUser(this.state)
    }

    render() {
        return (
          <div className="Home">
            <div className="login">
              <h1>Login</h1>
              <form onSubmit={this.onSubmitLogin}>
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
            </div>

            <div className="signup">
              <h1>--OR--</h1>
              <h1>Create New Account</h1>
            <form onSubmit={this.onSubmitSignUp}>
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
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        );
    }
}

export default Login;