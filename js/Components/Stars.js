import React, {Component} from "react";
import '../CSS/stars.css';

export class Stars extends Component {
    render() {
        return this.props.visible ? <div>
            <div className="stars"></div>
            <div className="twinkling"></div>
        </div> : null
    }
}