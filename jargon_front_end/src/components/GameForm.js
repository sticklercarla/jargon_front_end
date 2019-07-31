import React from 'react';

class GameForm extends React.Component {
    
    state = {
        category: "animals",
        difficulty: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleGameForm(this.state)
        // this.props.updatePage("game")
    }

    render() {
        return (
            
            <form onSubmit={this.handleSubmit} >
            <p>Select a difficulty level:</p>
                <label>
                    <input
                    type="radio"
                    value="easy"
                    name="difficulty"
                    checked={this.state.difficulty === "easy"}
                    onChange={this.handleChange}
                    />
                    Easy
                </label>
                <label>
                    <input
                    type="radio"
                    value="medium"
                    name="difficulty"
                    checked={this.state.difficulty === "medium"}
                    onChange={this.handleChange}
                    />
                    Medium
                </label>
                <label>
                    <input
                    type="radio"
                    value="hard"
                    name="difficulty"
                    checked={this.state.difficulty === "hard"}
                    onChange={this.handleChange}
                    />
                    Hard
                </label>
            <p>Select Your Category</p>
                <select name="category" onChange={this.handleChange}>
                    <option value="animals">Animals</option>
                    <option value="directions">Directions</option>
                    <option value="household_items">Household Items</option>
                    <option value="food">Food</option>
                    <option value="colors_shapes">Colors and Shapes</option>
                    <option value="relationships">Relationships</option>
                    <option value="activities">Activities</option>
                </select>
             <button type="submit">Make your choice</button>
            </form>
        )
    }
}

export default GameForm;