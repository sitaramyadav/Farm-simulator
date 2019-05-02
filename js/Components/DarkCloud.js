import React, {Component} from 'react';
import "../CSS/darkClouds.css";

export class DarkCloud extends Component {
    render() {
        const opacity = this.props.cloudy && this.props.day ? 1 : 0;
        // const class_name = this.props.cloudy && this.props.day ? "dark-clouds" : "normal-clouds";
        return <div className="dark-clouds normal-clouds" style={{opacity: opacity, display: "none"}}>
            <div className="dark-cloud dark-cloud-1"></div>
            <div className="dark-cloud dark-cloud-2"></div>
            <div className="dark-cloud dark-cloud-3"></div>
            <div className="dark-cloud dark-cloud-4"></div>
            <div className="dark-cloud dark-cloud-5"></div>
            <div className="dark-cloud dark-cloud-6"></div>
        </div>
    };
}