import React, {PureComponent} from "react";
import '../CSS/buttonPane.css'
import {Button} from "./Button";

export class ControlPane extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: true
        }
    }
    render() {
        let {pump} = this.props.state
        return <div className="control-pane">
            <Button name='pump' className="pump-switch" update={this.props.update} toggle={pump}/>
            <ul>
            {Object.keys(this.props.state).map(key => {
                return <li key={key}>
                <span className="key">{key.toUpperCase()}</span>
                <span>:</span>
                <span className="value">{this.props.state[key].toString()}</span>
            </li>
            })
            }
            </ul>
        </div>
    }
}