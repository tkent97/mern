import React, { Component } from "react";

class PutComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            happyBirthday: this.props.age
        }
    }
    increaseAge = () => {
        this.setState({
            happyBirthday: this.state.happyBirthday + 1
        })
    }
    render() {
        return (
            <>
                <h1>
                    {this.props.name}
                </h1>
                <button onClick={this.increaseAge}>Happy Birthday</button>
                <p>
                    Age: {this.state.happyBirthday}
                </p>

            </>
        )
    }

}

export default PutComponent;