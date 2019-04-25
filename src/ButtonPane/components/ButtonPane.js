import React, {Component} from "react";
import '../../CSS/buttonPane.css';
import {Button} from "../../Button/components/Button";

export class ButtonPane extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: true
        }
    }

    render() {
        return <div className="Button-pane">
            <Button name='day' update={this.props.update}/>
            <Button name='drySoil' update={this.props.update}/>
            <Button name='waterPump' update={this.props.update}/>
        </div>
    }
}