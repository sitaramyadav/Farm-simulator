import React, {Component} from 'react';
import "../../CSS/darkClouds.css";

export class DarkCloud extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return this.props.cloudy ? <div className="dark-clouds">
            <div className="dark-cloud dark-cloud-1"></div>
            <div className="dark-cloud dark-cloud-2"></div>
            <div className="dark-cloud dark-cloud-3"></div>
            <div className="dark-cloud dark-cloud-4"></div>
            <div className="dark-cloud dark-cloud-5"></div>
            <div className="dark-cloud dark-cloud-6"></div>
        </div> : null;
    };
}