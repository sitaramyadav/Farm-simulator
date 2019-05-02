import React, {PureComponent} from "react";
import {Button} from "./Button";
import axios from "axios";

export class ControlPane extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: true
        }
        this.triggerPump = this.triggerPump.bind(this);
    }

    triggerPump() {
        axios.post(`http://localhost:5000/trigger/PUMP/${!this.state.value}`)
            .then(function (response) {
                console.log(response);
            }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        let {pump} = this.props.state
        let panel_elements = [
            {
                key: "Water Pump State",
                value: <span><Button name='pump' className="pump-switch" update={this.triggerPump} toggle={pump}
                                     text={this.props.state.pump ? "On" : "Off"}/></span>
            },
            {class: "divider"},
            {
                key: "Light Conditions",
                value: this.props.state.day ? (this.props.state.cloudy ? "Cloudy" : "Sunny") : "Night"
            },
            {key: "Precipitation", value: this.props.state.rainy ? "Rainy" : "Dry"},
            {key: "Temperature (°C)", value: this.props.state.temperature + "°"},
            {key: "Humidity", value: this.props.state.humidity + "%"},
            {key: "Wind Direction", value: this.props.state.wind},
            {class: "divider"},
            {key: "Water Level", value: this.props.state.waterlevel + "%"},
            {key: "Soil Moisture", value: this.props.state.moisture + "%"},
            {class: "divider"},
            {key: "Power", value: this.props.state.power ? "Available" : "Un-available"},

        ]
        return <div className="control-pane">

            <ul>
                {panel_elements.map(element => {
                    return <li key={Math.random()}>
                        <span className="key">{element.key}</span>
                        <span className={element.class}>:</span>
                        <span className="value">{element.value}</span>

                    </li>
                })
                }
            </ul>
        </div>
    }
}