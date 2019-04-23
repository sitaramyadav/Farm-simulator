import React, {Component} from 'react';
import "../CSS/Clouds.css";

export class Clouds extends Component {
    render() {
        return this.props.day ? <div className="morning_clouds">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
        <div className="cloud cloud4"></div>
        <div className="cloud cloud5"></div>
    </div> : null
    };
}