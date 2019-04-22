import React, {Component} from "react";
import '../CSS/mainWindow.css'
import {Sun} from "./Sun";
import {Sky} from "./Sky";
import {Farm} from "./Farm";
import { Grass } from "./Grass";

export class MainWindow extends Component {
    render() {
        return <div className="Main-window ">
            <Sky/>
            <Sun/>
            <Farm/>
            <Grass />
        </div>;
    }
}