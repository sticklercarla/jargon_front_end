import React from 'react';
import Header from './Header.js'
import GameBody from './GameBody.js'

class Profile extends React.Component {

    state = {
        page: "profile"
    }

    updateState = (e) => {
        this.setState({ page: e })
    }

    render() {
        console.log(this.props.history)
        return(
            <div>
                <Header history={this.props.history} updateState={this.updateState} profileData={this.props.profileData} />
                <GameBody page={this.state.page} profileData={this.props.profileData} />
            </div>
        )
    }
}

export default Profile