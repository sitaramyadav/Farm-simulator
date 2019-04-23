import React, {Component} from "react";
import '../CSS/moon.css';

export class Moon extends Component {
    render() {
        return this.props.visible ? <div><div className="moon-in"/><div className="sun-off"></div></div> : null;
    }
}