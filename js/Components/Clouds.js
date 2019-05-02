import React, {Component} from 'react';
import "../CSS/Clouds.css";

export class Clouds extends Component {
    render() {
        const opacity = this.props.cloudy && this.props.day ? 0.5 : 0;
        return this.props.day ? <div>
            <div className="dark-cloudy" style={{opacity:opacity}}/>
            <div className="cloud-image"/>
            <div className="cloud-image cloud-delay"/>
            <div className="cloud-image cloud-delay-2"/>
    </div> : null
    };
}