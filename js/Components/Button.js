import React from "react";
import '../CSS/button.css'

export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true

        };
        this.updateButtonState =this.updateButtonState.bind(this)
    }

    updateButtonState() {
        this.setState((prevState) => {
            return {
                toggle: !prevState.toggle
            }
        })
        this.props.update(this.props.name, this.state.toggle)
    }


    render() {
        return <button onClick={this.updateButtonState} className="Button">{this.props.name}</button>;
    }

}