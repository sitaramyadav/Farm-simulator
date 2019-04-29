import React, {Component} from "react";
import '../../CSS/sky.css';

export class Sky extends Component {
    render() {
        const cloudyStyle = {
            "background-image" : "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
            "animation-name": "cloudy-sky",
            "animation-timing-function": "linear",
            "animation-duration":"4s",
            "animation-count":"1"
        }
        const style = this.props.cloudy ?
            cloudyStyle :
            {};
            return <div className={this.props.day ? 'sky' : 'night-sky'} style={style}/>;
    }
}