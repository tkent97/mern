import React, { Component } from "react"

class LightSwitch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clickCount: this.props.count
        }
    }

    increaseCount = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    }
    render() {
        return (
            <div>
                x={this.props.count}
                <p>
                    state var = {this.state.clickCount}
                </p>
                <p>the light is currently</p>
                <button onClick={this.increaseCount}>flip switch</button>
            </div>
        )
    }
}

export default LightSwitch;