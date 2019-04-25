import React, {Component} from "react";
import {Clouds} from "../../Clouds/components/Clouds";
import {Sky} from "../../Sky/components/Sky";
import {Sun} from "../../Sun/components/Sun";
import {Farm} from "../../Farm/components/Farm";
import {Grass} from "../../Grass/components/Grass";
import {Moon} from "../../Moon/components/Moon";
import {Ground} from "../../Ground/components/Ground";
import {Well} from "../../Well/components/Well";
import {SoilHeap} from "../../SoilHeap/components/SoilHeap";
import {LandCrossSection} from "../../LandCrossSection/components/LandCrossSection";
import {WaterPump} from "../../WaterPump/components/WaterPump";
import {PumpWater} from "../../PumpWater/components/PumpWater";
import '../../CSS/mainWindow.css';


export class MainWindow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="Main-window ">
            <Clouds day={this.props.values.day}/>
            <Sky day={this.props.values.day}/>
            <Sun day={this.props.values.day}/>
            <Farm/>
            <Grass />
            <Moon visible={!this.props.values.day}/>
            <Ground drySoil={this.props.values.drySoil} />
            <Well waterLevel={this.props.values.waterLevel}/>
            <SoilHeap/>
            <LandCrossSection/>
            <WaterPump />
            <PumpWater isOn={this.props.values.waterPump}/>
        </div>;
    }
}