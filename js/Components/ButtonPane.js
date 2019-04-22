import React, {Component} from "react";
import '../CSS/buttonPane.css'
import {Button} from "./Button";

export class ButtonPane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: true

        }
    }

    render() {
        return <div className="Button-pane">
            <Button update={this.props.update}/>
        </div>
    }
}