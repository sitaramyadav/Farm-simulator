import React, {Component} from "react";
import "../CSS/well.css";
import {WaterWaves} from "./WaterWaves";

export class Well extends Component {
    render(){
        console.log(this.props.waterLevel)
        return <div className="well">
            <div className="well-water" style={{height:`${this.props.waterLevel}%`}}>
                <WaterWaves/>
            </div>
        </div>;
    }
}