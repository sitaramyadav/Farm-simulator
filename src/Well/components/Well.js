import React, {Component} from "react";
import {WaterWaves} from "../../WaterWaves/components/WaterWaves";
import '../../CSS/well.css';


export class Well extends Component {
    render(){
        return <div className="well">
            <div className="well-water" style={{height:`${this.props.waterLevel}%`}}>
                <WaterWaves/>
            </div>
        </div>;
    }
}