import React, {Component} from "react";
import '../CSS/mainWindow.css'
import {Sky} from "./Sky";
import {Farm} from "./Farm";
import { Grass } from "./Grass";
import {Moon} from "./Moon";
import {Sun} from "./Sun";
import {Clouds} from "./Clouds";
import {Ground} from "./Ground";

export class MainWindow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {day, drySoil} = this.props.state
        return <div className="Main-window ">
            <Clouds day={day}/>
            <Sky day={day}/>
            <Sun day={day}/>
            <Farm/>
            <Grass />
            <Moon visible={!day}/>
            <Ground drySoil={drySoil} />
        </div>;
    }
}