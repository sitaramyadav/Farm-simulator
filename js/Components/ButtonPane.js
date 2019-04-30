import React, {Component} from "react";
import '../CSS/controlPane.css'
import {Button} from "./Button";

export class ButtonPane extends Component {
    render() {
        let {cloudy, day, moisture, pump,rainy} = this.props.state;
        return <div className="Button-pane">
            <Button name='day' update={this.props.update} toggle={day}/>
            <Button name='moisture' update={this.props.update} toggle={moisture}/>
            <Button name='pump' update={this.props.update} toggle={pump}/>
            <Button name='cloudy' update={this.props.update} toggle={cloudy}/>
            <Button name='rainy' update={this.props.update} toggle={rainy}/>
        </div>
    }
}