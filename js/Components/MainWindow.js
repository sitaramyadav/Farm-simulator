import React, {Component} from "react";
import '../CSS/mainWindow.css'
import {Sky} from "./Sky";
import {Farm} from "./Farm";
import { Grass } from "./Grass";
import {Moon} from "./Moon";
import {Stars} from "./Stars";
import {Sun} from "./Sun";
import {Clouds} from "./Clouds";

export class MainWindow extends Component {
    render() {
        return <div className="Main-window ">
            <Sky day={this.props.day}/>
            <Sun/>
            <Clouds />
            <Farm/>
            <Grass />
            <Moon visible={!this.props.day}/>
            <Stars visible={!this.props.day}/>
        </div>;
    }
}