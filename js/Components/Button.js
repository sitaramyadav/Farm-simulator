import React from "react";
import '../CSS/button.css'

export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: props.toggle,
            name: props.name

        };
        this.updateButtonState =this.updateButtonState.bind(this)
        console.log("Text here ", this.state.name);
    }

    updateButtonState() {
        this.props.update(this.props.name, !this.props.toggle)
    }

    render() {
        return <button onClick={this.updateButtonState} className={this.props.toggle ? "button-on" : "button-off"}>{this.state.name}</button>;
    }

}