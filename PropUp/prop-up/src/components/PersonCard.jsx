import React, { Component } from "react";

class PersonCard extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.someText}</h1>
                <p>Age:{this.props.age}</p>
            </div>
        );
    }
}
export default PersonCard