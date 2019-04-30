import React, {Component} from "react";
import '../CSS/sky.css';
export class Sky extends Component {
    render() {
        const cloudyStyle = {
            "background" : "#e2ebf0"
        };
        const sky = {
            "background": "#b7eaff"
        };

        const night_sky = {
            "background": "#010A10"
        };
        const style = this.props.day ? (this.props.cloudy ? cloudyStyle : sky) : night_sky;
            return <div className={this.props.day ? 'sky' : 'night-sky'} style={style}/>;
    }
}