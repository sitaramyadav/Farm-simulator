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
        console.log("Props inside main window", props);

        this.state = {
            day: this.props.day,
            drySoil: this.props.drySoil,
            waterLevel: this.props.waterLevel,
            waterPump: this.props.waterPump
        };
    }

    render() {
        return <div className="Main-window ">
            <Clouds day={this.state.day}/>
            <Sky day={this.state.day}/>
            <Sun day={this.state.day}/>
            <Farm/>
            <Grass />
            <Moon visible={!this.state.day}/>
            <Ground drySoil={this.state.drySoil} />
            <Well waterLevel={this.state.waterLevel}/>
            <SoilHeap/>
            <LandCrossSection/>
            <WaterPump />
            <PumpWater isOn={this.state.waterPump}/>
        </div>;
    }
}