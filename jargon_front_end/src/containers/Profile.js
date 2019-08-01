import React from 'react';
import Header from './Header.js'
import GameBody from './GameBody.js'

class Profile extends React.Component {

    state = {
        page: "profile"
    }

    updatePage = (e) => {
        this.setState({ page: e })
    }

    render() {
        return(
            <div>
                <Header history={this.props.history} updatePage={this.updatePage} profileData={this.props.profileData} />
                <GameBody page={this.state.page} createNewGame={this.props.createNewGame} profileData={this.props.profileData} updatePage={this.updatePage}/>
            </div>
        )
    }
}

export default Profile