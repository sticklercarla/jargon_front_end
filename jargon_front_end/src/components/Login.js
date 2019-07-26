import React from 'react';

class Login extends React.Component {
    
    state = {
        username: "",
        password: ""
    }

    render() {
        return (
          <div className="Login">
              <h1>Login</h1>
              <form>
                <input type="text" name="username" value={this.state.username} placeholder="username"/>
                <input type="text" name="password" value={this.state.password} placeholder="password"/>
                <input type="submit" value="Submit" />
              </form>
          </div>
        );
    }
}

export default Login;