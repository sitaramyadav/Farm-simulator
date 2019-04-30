import React, {Component} from "react";
import '../CSS/sky.css';
export class Sky extends Component {
    render() {
        const cloudyStyle = {
            "backgroundImage" : "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
            "animationName": "cloudy-sky",
            "animationTimingFunction": "linear",
            "animationDuration":"4s",
            "animationCount":1
        }
        const style = this.props.cloudy && this.props.day ? cloudyStyle : {};
            return <div className={this.props.day ? 'sky' : 'night-sky'} style={style}/>;
    }
}