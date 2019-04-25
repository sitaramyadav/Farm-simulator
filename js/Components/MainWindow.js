import React, {Component} from "react";
import '../CSS/mainWindow.css'
import {Well} from "./Well";
import {SoilHeap} from "./SoilHeap";
import {LandCrossSection} from "./LandCrossSection";
import {WaterPump} from "./WaterPump";
import {PumpWater} from "./PumpWater";
import {Clouds} from "../../src/Clouds/components/Clouds";
import {Sky} from "../../src/Sky/components/Sky";
import {Sun} from "../../src/Sun/components/Sun";
import {Farm} from "../../src/Farm/components/Farm";
import {Grass} from "../../src/Grass/components/Grass";
import {Moon} from "../../src/Moon/components/Moon";
import {Ground} from "../../src/Ground/components/Ground";

export class MainWindow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {day, drySoil, waterLevel,waterPump} = this.props.state
        return <div className="Main-window ">
            <Clouds day={day}/>
            <Sky day={day}/>
            <Sun day={day}/>
            <Farm/>
            <Grass />
            <Moon visible={!day}/>
            <Ground drySoil={drySoil} />
            <Well waterLevel={waterLevel}/>
            <SoilHeap/>
            <LandCrossSection/>
            <WaterPump />
            <PumpWater isOn={waterPump}/>
        </div>;
    }
}