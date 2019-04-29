import React, {Component} from "react";
import '../CSS/landCrossSection.css';

export class LandCrossSection extends Component {
    render() {

        return <div className="land-cross-section" style={{opacity: 1 - (this.props.moisture / 100)}}></div>;
    }
}