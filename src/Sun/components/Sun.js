import React, {Component} from "react";
import '../../CSS/sun.css';

export class Sun extends Component {
    render() {
        return this.props.day ? <div><div className="sun-in"/><div className="moon-out"/></div> : null;
    }
}