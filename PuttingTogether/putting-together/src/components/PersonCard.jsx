import React, { Component } from "react"

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    increaseCount = () => {
        this.setState({
            age: this.state.age + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>Age: {this.state.age}</p>
                <button onClick={this.increaseCount}>Birthday button for {this.pro}</button>
            </div>
        );
    }
}

export default PersonCard;