import React, {Component} from "react";
import '../CSS/mainWindow.css'
import {Sky} from "./Sky";
import {Farm} from "./Farm";
import { Grass } from "./Grass";
import {Moon} from "./Moon";
import {Sun} from "./Sun";
import {Clouds} from "./Clouds";
import {Bedrock} from "./Bedrock";
import {Well} from "./Well";
import {VerticalWall} from "./VerticalWall";
import {LandCrossSection} from "./LandCrossSection";
import {WaterPump} from "./WaterPump";
import {PumpWater} from "./PumpWater";
import {DarkCloud} from "./DarkCloud";
import {Rain} from "./Rain";
import {Ground} from "./Ground";
import {Tree} from "./Tree";


export class MainWindow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {day, moisture, waterlevel, pump, cloudy ,rainy} = this.props.state
        return <div className="Main-window ">
            <Clouds day={day} cloudy={cloudy}/>
            <Sky day={day} cloudy={cloudy}/>
            <Sun day={day}/>
            <Farm/>
            <Tree/>
            <Grass />
            <Moon visible={!day}/>
            <DarkCloud cloudy={cloudy} day={day}/>
            <Rain rainy={rainy}/>
            <div style={{background: 'transparent'}}>
                <Farm/>
                <Grass/>
                <Ground moisture={moisture}/>
                <Bedrock/>
                <Well waterlevel={waterlevel}/>
                <VerticalWall/>
                <LandCrossSection moisture={moisture}/>
                <WaterPump/>
                <PumpWater isOn={pump}/>
            </div>
        </div>;
    }
}