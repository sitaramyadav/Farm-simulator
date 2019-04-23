import React, {Component} from "react";
import '../CSS/sky.css';
export class Sky extends Component {
    render() {
        return <div className={this.props.day ? 'sky' : 'night-sky'}/>;
    }
}