import React, {Component} from "react";
import '../CSS/mainWindow.css'
import {Sky} from "./Sky";
import {Farm} from "./Farm";
import { Grass } from "./Grass";
import {Moon} from "./Moon";
import {Sun} from "./Sun";
import {Clouds} from "./Clouds";
import {Ground} from "./Ground";
import {Well} from "./Well";
import {SoilHeap} from "./SoilHeap";
import {LandCrossSection} from "./LandCrossSection";
import {WaterPump} from "./WaterPump";
import {PumpWater} from "./PumpWater";
import {DarkCloud} from "./DarkCloud";

export class MainWindow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {day, moisture, waterlevel, pump, cloudy} = this.props.state
        return <div className="Main-window ">
            <Clouds day={day} cloudy={cloudy}/>
            <Sky day={day} cloudy={cloudy}/>
            <Sun day={day}/>
            <Farm/>
            <Grass />
            <Moon visible={!day}/>
            <Ground moisture={moisture} />
            <Well waterlevel={waterlevel}/>
            <SoilHeap/>
            <LandCrossSection/>
            <WaterPump />
            <PumpWater isOn={pump}/>
            <DarkCloud cloudy={cloudy}/>
        </div>;
    }
}