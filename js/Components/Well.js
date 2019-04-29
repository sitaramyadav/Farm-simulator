import React, {Component} from "react";
import "../CSS/well.css";
import {WaterWaves} from "./WaterWaves";

export class Well extends Component {
    render(){
        return <div className="well">
            <div className="well-water" style={{height:`${this.props.waterlevel}%`}}>
                <WaterWaves/>
            </div>
        </div>;
    }
}