import React from 'react';

class GameForm extends React.Component {
    
    state = {
        category: "",
        difficulty: ""
    }

    handleChange = (e) => {
        console.log(e)
    }

    render() {
        return (
            
            <form>
            <p>Select a difficulty level:</p>
                <label>
                    <input
                    type="radio"
                    value="easy"
                    checked={this.state.difficulty === "easy"}
                    onChange={this.handleChange}
                    />
                    Easy
                </label>
                <label>
                    <input
                    type="radio"
                    value="medium"
                    checked={this.state.difficulty === "medium"}
                    onChange={this.handleChange}
                    />
                    Medium
                </label>
                <label>
                    <input
                    type="radio"
                    value="hard"
                    checked={this.state.difficulty === "hard"}
                    onChange={this.handleChange}
                    />
                    Hard
                </label>
            <p>Select Your Category</p>

            <button type="submit">Make your choice</button>
            </form>
        )
    }
}

export default GameForm;